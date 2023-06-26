import { Form, redirect } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const newsletterUrl = "https://www.course-api.com/cocktails-newsletter";

export const action = async ({ request }: any) => {
  try {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    console.log("Sending data:", data);

    const response = await axios.post(newsletterUrl, data);
    console.log("Response received:", response);

    toast.success(response.data.msg);
    return redirect("/");
  } catch (error: any | Error) {
    console.error("Error during form submission:", error);
    if (error.response) {
      console.error("Server responded with:", error.response.data);
    }
    toast.error("Form submission failed");
    return null;
  }
};

const Newsletter = () => {
  return (
    <Form className="form" method="POST">
      <h4 style={{ textAlign: "center", marginBottom: "2rem" }}>
        subscribe to our newsletter
      </h4>
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input
          type="text"
          className="form-input"
          name="name"
          id="name"
          required
          defaultValue="John"
        />
      </div>
      <div className="form-row">
        <label htmlFor="lastName" className="form-label">
          last name
        </label>
        <input
          type="text"
          className="form-input"
          name="lastName"
          id="lastName"
          required
          defaultValue="Doe"
        />
      </div>
      <div className="form-row">
        <label htmlFor="email" className="form-label">
          email
        </label>
        <input
          type="text"
          className="form-input"
          name="email"
          id="email"
          required
          defaultValue="test@test.com"
        />
      </div>
      <button
        type="submit"
        className="btn btn-block"
        style={{ marginTop: "0.5rem" }}
      >
        Submit
      </button>
    </Form>
  );
};

export default Newsletter;
