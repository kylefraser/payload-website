import { EmailTemplate } from '../components/EmailTemplate'
import { Resend } from 'resend'

export const myAdapter = () => ({
  defaultFromAddress: 'fraserkc@gmail.com',
  defaultFromName: 'Test Name',
  sendEmail: async (message: any) => {
    const resend = new Resend(process.env.RESEND_API_KEY)

    // @ts-expect-error
    await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: message.to,
      subject: message.subject,
      react: EmailTemplate({ firstName: message.subject }),
    })
    // Perform any logic here
    console.log(`To: '${message.to}', Subject: '${message.subject}'`)
    return Promise.resolve()
  },
})
