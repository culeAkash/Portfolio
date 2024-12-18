import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { motion } from "motion/react";

const contactMeSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),

  access_key: z.string(),
});

const ContactMe = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof contactMeSchema>>({
    resolver: zodResolver(contactMeSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      access_key: "",
    },
  });

  const sendMessage = async (data: z.infer<typeof contactMeSchema>) => {
    console.log(data);
    data.access_key = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
    const result = await response.json();
    console.log(result);

    if (result.success) {
      toast({
        title: "Message Sent",
        description: "Your message has been sent successfully",
        variant: "primary",
      });
      form.reset();
    } else {
      toast({
        title: "Error",
        description: result.message,
        variant: "destructive",
      });
      console.log("Error", data);
    }
  };
  return (
    <div className="mt-24 w-full h-full">
      <div className="flex flex-col gap-y-2 items-center">
        <h1 className="md:text-3xl text-xl font-bold text-center text-[#E2E9F1] uppercase font-mono">
          <p style={{ letterSpacing: "10px" }}>
            Contact<span className="ml-2">Me</span>
          </p>
        </h1>

        <div className="w-10 h-[3px] bg-[#1d2d5a] mt-4" />
        <div className="flex flex-col md:flex-row  items-start justify-between w-[100%] md:w-[80%] lg:w-[75%]  rounded-[10px] bg-[#0E1734] shadow-lg  mt-5 px-10 py-5 md:p-10 group">
          <div className="h-fit w-full flex justify-center pb-3">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(sendMessage)}
                className="w-full text-[#369ea0] uppercase font-bold text-md space-y-4"
              >
                <FormField
                  name="access_key"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="text"
                          {...field}
                          className="rounded-xl  hidden"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  name="name"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name:</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          {...field}
                          placeholder="Enter your name..."
                          className="h-16 rounded-[4px]  text-opacity-0"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  name="email"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email:</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          {...field}
                          placeholder="Enter your email..."
                          className="rounded-[4px] h-16 "
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  name="message"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message:</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Enter your message..."
                          {...field}
                          className="rounded-[4px] py-4 px-3"
                          rows={10}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.1 }}
                  type="submit"
                  className="w-full md:w-40 h-14 rounded-[10px] text-[#E1E9F1] text-sm uppercase bg-[#369ea0]  md:mr-2 py-2 px-3"
                >
                  Submit
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.1 }}
                  type="reset"
                  className="w-full md:w-40 h-14 rounded-[10px] text-[#E1E9F1] text-sm bg-[#369ea0] py-2 px-3 md:mx-2 uppercase"
                >
                  Reset
                </motion.button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
