import { Form, redirect, useNavigation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { IRequestDataProps } from "../types";

const newsletterUrl = "https://www.course-api.com/cocktails-newsletter";

export const action = async ({ request }: IRequestDataProps) => {
  try {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    const response = await axios.post(newsletterUrl, data);

    toast.success(response.data.msg);
    return redirect("/");
  } catch (error: any | Error) {
    if (error.response) {
      console.error("Server responded with:", error.response.data);
    }
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Newsletter = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

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
        disabled={isSubmitting}
      >
        {isSubmitting ? "submitting" : "submit"}
      </button>
    </Form>
  );
};

export default Newsletter;
