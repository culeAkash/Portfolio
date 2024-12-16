const ContactMe = () => {
  return (
    <div className="mt-24 w-full min-h-[85vh] h-full">
      <div className="flex flex-col gap-y-2 items-center">
        <h1 className="md:text-3xl text-xl font-bold text-center text-[#E2E9F1] uppercase font-mono">
          <p style={{ letterSpacing: "10px" }}>
            Contact<span className="ml-2">Me</span>
          </p>
        </h1>

        <div className="w-10 h-[3px] bg-[#1d2d5a] mt-4" />
        <div className="flex flex-col md:flex-row  items-start justify-between w-full h-fit bg-transparent rounded-[10px] hover:bg-[#161f33] hover:shadow-xl transition-all mt-5 p-6 group">
          <div className="h-[70vh] w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
