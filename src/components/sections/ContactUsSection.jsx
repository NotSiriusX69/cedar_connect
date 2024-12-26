import InputEmail from "../form/InputEmail";
import TextArea from "../form/TextArea";
import Button from "../form/Button";

const ContactUsSection = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <h3>Send Us An Email</h3>
      <p>Fill the email form</p>
      <form
        action="mailto:cedar_connect@gmail.com"
        method="post"
        className="flex flex-col gap-4 justify-center items-center bg-third w-fit py-24 px-4 shadow-2xl rounded-3xl"
      >
        <InputEmail placeholder={"Email"}/>
        <TextArea name={"message"} placeholder={"Message"}/>
        <Button text={"Send Email"} type={"submit"} />
      </form>
    </div>
  );
};

export default ContactUsSection;
