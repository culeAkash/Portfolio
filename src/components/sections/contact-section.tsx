import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { useToast } from "@/hooks/use-toast";

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
        <div className="flex flex-col md:flex-row  items-start justify-between w-[100%] lg:w-[60%] bg-transparent rounded-[10px] hover:bg-[#161f33] hover:shadow-xl transition-all  mt-5 p-10 group">
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
                          className="rounded-xl focus-within:text-[#E1E9F1] focus-visible:text-[#E1E9F1] hidden"
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
                          className="rounded-xl focus-within:text-[#E1E9F1] focus-visible:text-[#E1E9F1]"
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
                          className="rounded-xl focus-within:text-[#E1E9F1] focus-visible:text-[#E1E9F1]"
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
                          className="rounded-xl focus-within:text-[#E1E9F1] focus-visible:text-[#E1E9F1]"
                          rows={10}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full md:w-min border-2 border-[#369ea0] rounded-[10px] text-[#369ea0] hover:text-[#E1E9F1] hover:border-[#E1E9F1]  transition-all md:mr-2"
                >
                  Submit
                </Button>
                <Button
                  type="reset"
                  className="w-full md:w-min border-2 border-[#369ea0] rounded-[10px] text-[#369ea0] hover:text-[#E1E9F1] hover:border-[#E1E9F1]  transition-all"
                  onClick={() => {
                    form.reset();
                  }}
                >
                  Reset
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
