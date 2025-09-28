// app/api/postcontact/route.js
import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import nodemailer from "nodemailer";

export async function POST(req) {
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.SMTP_USER,  // your Gmail
                pass: process.env.SMTP_PASS,  // app password (not your Gmail password)
            },
        });

        const body = await req.json();
        const { username, email, description } = body;

        if (!username || !email || !description) {
            return NextResponse.json(
                { message: "Please fill all the fields", data: { username, email, description } },
                { status: 400 }
            );
        }

        // Write data to contact.json
        await fs.writeFile(`${process.cwd()}/contactdata/contact.json`, JSON.stringify(body, null, 2));
        const data = await fs.readFile(`${process.cwd()}/contactdata/contact.json`, "utf-8");
        await transporter.sendMail({
            to: "hanzalarehman804@gmail.com", subject: "Hunting Coder user", text: `
    📩 New Contact Submission:

    👤 Name: ${username}
    📧 Email: ${email}
    📝 Message: ${description}
  `,
        });
        return NextResponse.json({
            message: "Contact saved successfully!",
            data: body,
        });
    } catch (error) {
        return NextResponse.json(
            { error: "Invalid Request", details: error.message },
            { status: 400 }
        );
    }
}

