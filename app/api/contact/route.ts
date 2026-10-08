import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          message: 'Name, email, and message are required',
        },
        { status: 400 }
      )
    }

    const safeName = escapeHtml(name.trim())
    const safeEmail = escapeHtml(email.trim())
    const formattedMessage = escapeHtml(message.trim()).replace(/\n/g, '<br/>')
    const currentDate = new Date().toLocaleDateString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `💼 New Portfolio Message from ${name}`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Portfolio Message</title>
        </head>
        <body style="margin: 0; padding: 0; background-color: #f4f5f7; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; color: #1e293b;">
          <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background-color: #f4f5f7; padding: 40px 16px;">
            <tr>
              <td align="center">
                <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="max-width: 580px; background-color: #ffffff; border-radius: 20px; overflow: hidden; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06); border: 1px solid #e2e8f0;">
                  
                  <!-- Top Banner Header -->
                  <tr>
                    <td style="background-color: #171717; padding: 36px 32px 30px; text-align: left;">
                      <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                        <tr>
                          <td>
                            <span style="display: inline-block; background-color: rgba(16, 185, 129, 0.15); color: #34d399; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; padding: 4px 12px; border-radius: 100px; border: 1px solid rgba(16, 185, 129, 0.3);">
                              ● New Portfolio Inquiry
                            </span>
                          </td>
                          <td align="right" style="color: #94a3b8; font-size: 12px;">
                            ${currentDate}
                          </td>
                        </tr>
                        <tr>
                          <td colspan="2" style="padding-top: 18px;">
                            <h1 style="margin: 0; color: #ffffff; font-size: 22px; font-weight: 600; letter-spacing: -0.02em;">
                              You received a new message
                            </h1>
                            <p style="margin: 6px 0 0; color: #94a3b8; font-size: 13px;">
                              Sent directly from your portfolio contact form.
                            </p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Client Information Card -->
                  <tr>
                    <td style="padding: 28px 32px 16px;">
                      <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background-color: #f8fafc; border-radius: 14px; border: 1px solid #e2e8f0; padding: 18px 20px;">
                        <tr>
                          <td width="48" valign="top">
                            <div style="width: 42px; height: 42px; background: linear-gradient(135deg, #171717 0%, #334155 100%); color: #ffffff; border-radius: 50%; text-align: center; line-height: 42px; font-weight: 700; font-size: 16px;">
                              ${safeName.charAt(0).toUpperCase()}
                            </div>
                          </td>
                          <td style="padding-left: 14px;">
                            <div style="font-size: 15px; font-weight: 600; color: #0f172a;">
                              ${safeName}
                            </div>
                            <div style="margin-top: 3px;">
                              <a href="mailto:${safeEmail}" style="font-size: 13px; color: #2563eb; text-decoration: none;">
                                ${safeEmail}
                              </a>
                            </div>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Message Content -->
                  <tr>
                    <td style="padding: 8px 32px 24px;">
                      <div style="font-size: 11px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.12em; margin-bottom: 10px;">
                        Message
                      </div>
                      <div style="background-color: #ffffff; border-radius: 14px; border: 1px solid #e2e8f0; border-left: 4px solid #171717; padding: 20px 22px; font-size: 14px; line-height: 1.7; color: #334155;">
                        ${formattedMessage}
                      </div>
                    </td>
                  </tr>

                  <!-- Quick Action Button -->
                  <tr>
                    <td style="padding: 8px 32px 36px; text-align: center;">
                      <a href="mailto:${safeEmail}?subject=Re:%20Portfolio%20Inquiry" style="display: inline-block; background-color: #171717; color: #ffffff; text-decoration: none; font-size: 14px; font-weight: 600; padding: 13px 30px; border-radius: 100px; box-shadow: 0 4px 14px rgba(0, 0, 0, 0.12);">
                        Reply to ${safeName} &rarr;
                      </a>
                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="border-top: 1px solid #f1f5f9; background-color: #fafafa; padding: 20px 32px; text-align: center;">
                      <p style="margin: 0; font-size: 12px; color: #94a3b8;">
                        <strong style="color: #64748b;">Syed Muhemin Ali</strong> · Developer Portfolio
                      </p>
                      <p style="margin: 4px 0 0; font-size: 11px; color: #cbd5e1;">
                        This email was securely delivered via your portfolio contact API.
                      </p>
                    </td>
                  </tr>

                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    })

    return NextResponse.json({
      success: true,
      message: 'Email sent successfully',
    })
  } catch (error) {
    console.error('Email sending error:', error)

    return NextResponse.json(
      {
        success: false,
        message: 'Failed to send email',
      },
      { status: 500 }
    )
  }
}
