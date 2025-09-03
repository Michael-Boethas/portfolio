import { useState } from "react";

export interface SubmitStatus {
    success: boolean | null;
    message: string;
}

interface UseContactFormProps {
    endpoint: string;
    successMessage: string;
    errorMessage: string;
}

/**
 * Custom hook for handling a contact form submission.
*/
export function useContactForm({ endpoint, successMessage, errorMessage }: UseContactFormProps) {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState<SubmitStatus>({ success: null, message: "" });

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const form = event.target as HTMLFormElement;
        const beeVomitJar = (form.elements.namedItem("beeVomitJar") as HTMLInputElement)?.value || null;

        if (beeVomitJar) {
            console.log("Bot detected: submission blocked.");
            return;
        }

        const formData = new FormData();
        formData.append("email", email);
        formData.append("message", message);

        try {
            if (!endpoint) throw new Error("Email service endpoint is not defined");

            const response = await fetch(endpoint, {
                method: "POST",
                body: formData,
                headers: { Accept: "application/json" },
            });

            if (!response.ok) throw new Error("Network response was not ok");

            setStatus({ success: true, message: successMessage });
            setEmail("");
            setMessage("");
        } catch (error) {
            console.error("Error submitting form:", error);
            setStatus({ success: false, message: errorMessage });
        }
    };

    const resetStatus = () => setStatus({ success: null, message: "" });

    return {
        email,
        setEmail,
        message,
        setMessage,
        status,
        handleSubmit,
        resetStatus,
    };
}
