'use server'

import { revalidatePath } from "next/cache";

export default async function Contact() {
    async function Form(submit: FormData) {
        "use server"

        const name = submit.get("name");
        const email = submit.get("email");
        const message = submit.get("message");

        console.log("Form submitted:", { name, email, message });
        revalidatePath("/contact");
    }

    return (
        <form action={Form}>
            <input style={{ margin: "20px 10px", border: '2px double', padding: '10px', backgroundColor: '#555555', color: 'white' }} type="text" name="name" placeholder="Your Name"/>
            <input style={{ margin: "20px 10px", border: '2px double', padding: '10px', backgroundColor: '#555555', color: 'white' }} type="email" name="email" placeholder="Your Email"/>
            <br/>
            <textarea style={{ margin: "20px 10px", border: '2px double', padding: '10px', backgroundColor: '#555555', color: 'white' }} name="message" placeholder="Your Message"></textarea>
            <br/>
            <button type="submit" style={{ margin: "20px 10px", border: '2px double', padding: '10px', backgroundColor: '#555555', color: 'white' }}>Submit</button>
        </form>
    );
}