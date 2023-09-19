const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const { OAuth2 } = google.auth;
const oauth_link = "https://developers.google.com/oauthplayground";
const { EMAIL, MAILING_ID, MAILING_REFRESH, MAILING_SECRET } = process.env;

const auth = new OAuth2(
  MAILING_ID,
  MAILING_SECRET,
  MAILING_REFRESH,
  oauth_link
);

exports.sendVerificationEmail = (email, name, url) => {
  auth.setCredentials({
    refresh_token: MAILING_REFRESH,
  });
  const accessToken = auth.getAccessToken();
  const stmp = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: EMAIL,
      clientId: MAILING_ID,
      clientSecret: MAILING_SECRET,
      refreshToken: MAILING_REFRESH,
      accessToken,
    },
  });
  const mailOptions = {
    from: EMAIL,
    to: email,
    subject: "ViMeet Email Verification",
    html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html
      xmlns="http://www.w3.org/1999/xhtml"
      xmlns:o="urn:schemas-microsoft-com:office:office"
      style="font-family: Poppins, sans-serif"
    >
      <head>
        <meta charset="UTF-8" />
        <meta content="width=device-width,initial-scale=1" name="viewport" />
        <meta name="x-apple-disable-message-reformatting" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta content="telephone=no" name="format-detection" />
        <title>New email template 2023-09-10</title>
        <!--[if (mso 16)
          ]><style type="text/css">
            a {
              text-decoration: none;
            }
          </style><!
        [endif]-->
        <!--[if gte mso 9
          ]><style>
            sup {
              font-size: 100% !important;
            }
          </style><!
        [endif]-->
        <!--[if gte mso 9
          ]><xml
            ><o:OfficeDocumentSettings
              ><o:AllowPNG></o:AllowPNG>
              <o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings
            ></xml
          ><!
        [endif]-->
        <!--[if !mso]><!-- -->
        <link
          href="https://fonts.googleapis.com/css2?family=Krona+One&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
          rel="stylesheet"
        />
        <!--<![endif]-->
        <style type="text/css">
          #outlook a {
            padding: 0;
          }
          .es-button {
            mso-style-priority: 100 !important;
            text-decoration: none !important;
          }
          a[x-apple-data-detectors] {
            color: inherit !important;
            text-decoration: none !important;
            font-size: inherit !important;
            font-family: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important;
          }
          .es-desk-hidden {
            display: none;
            float: left;
            overflow: hidden;
            width: 0;
            max-height: 0;
            line-height: 0;
            mso-hide: all;
          }
          @media only screen and (max-width: 600px) {
            a,
            ol li,
            p,
            ul li {
              line-height: 150% !important;
            }
            h1,
            h1 a,
            h2,
            h2 a,
            h3,
            h3 a {
              line-height: 120%;
            }
            h1 {
              font-size: 30px !important;
              text-align: center;
            }
            h2 {
              font-size: 24px !important;
              text-align: center;
            }
            h3 {
              font-size: 20px !important;
              text-align: left;
            }
            .es-content-body h1 a,
            .es-footer-body h1 a,
            .es-header-body h1 a {
              font-size: 30px !important;
              text-align: center;
            }
            .es-content-body h2 a,
            .es-footer-body h2 a,
            .es-header-body h2 a {
              font-size: 24px !important;
              text-align: center;
            }
            .es-content-body h3 a,
            .es-footer-body h3 a,
            .es-header-body h3 a {
              font-size: 20px !important;
              text-align: left;
            }
            .es-menu td a {
              font-size: 14px !important;
            }
            .es-header-body a,
            .es-header-body ol li,
            .es-header-body p,
            .es-header-body ul li {
              font-size: 14px !important;
            }
            .es-content-body a,
            .es-content-body ol li,
            .es-content-body p,
            .es-content-body ul li {
              font-size: 14px !important;
            }
            .es-footer-body a,
            .es-footer-body ol li,
            .es-footer-body p,
            .es-footer-body ul li {
              font-size: 14px !important;
            }
            .es-infoblock a,
            .es-infoblock ol li,
            .es-infoblock p,
            .es-infoblock ul li {
              font-size: 12px !important;
            }
            [class="gmail-fix"] {
              display: none !important;
            }
            .es-m-txt-c,
            .es-m-txt-c h1,
            .es-m-txt-c h2,
            .es-m-txt-c h3 {
              text-align: center !important;
            }
            .es-m-txt-r,
            .es-m-txt-r h1,
            .es-m-txt-r h2,
            .es-m-txt-r h3 {
              text-align: right !important;
            }
            .es-m-txt-l,
            .es-m-txt-l h1,
            .es-m-txt-l h2,
            .es-m-txt-l h3 {
              text-align: left !important;
            }
            .es-m-txt-c img,
            .es-m-txt-l img,
            .es-m-txt-r img {
              display: inline !important;
            }
            .es-button-border {
              display: inline-block !important;
            }
            a.es-button,
            button.es-button {
              font-size: 18px !important;
              display: inline-block !important;
            }
            .es-adaptive table,
            .es-left,
            .es-right {
              width: 100% !important;
            }
            .es-content,
            .es-content table,
            .es-footer,
            .es-footer table,
            .es-header,
            .es-header table {
              width: 100% !important;
              max-width: 600px !important;
            }
            .es-adapt-td {
              display: block !important;
              width: 100% !important;
            }
            .adapt-img {
              width: 100% !important;
              height: auto !important;
            }
            .es-m-p0 {
              padding: 0 !important;
            }
            .es-m-p0r {
              padding-right: 0 !important;
            }
            .es-m-p0l {
              padding-left: 0 !important;
            }
            .es-m-p0t {
              padding-top: 0 !important;
            }
            .es-m-p0b {
              padding-bottom: 0 !important;
            }
            .es-m-p20b {
              padding-bottom: 20px !important;
            }
            .es-hidden,
            .es-mobile-hidden {
              display: none !important;
            }
            table.es-desk-hidden,
            td.es-desk-hidden,
            tr.es-desk-hidden {
              width: auto !important;
              overflow: visible !important;
              float: none !important;
              max-height: inherit !important;
              line-height: inherit !important;
            }
            tr.es-desk-hidden {
              display: table-row !important;
            }
            table.es-desk-hidden {
              display: table !important;
            }
            td.es-desk-menu-hidden {
              display: table-cell !important;
            }
            .es-menu td {
              width: 1% !important;
            }
            .esd-block-html table,
            table.es-table-not-adapt {
              width: auto !important;
            }
            table.es-social {
              display: inline-block !important;
            }
            table.es-social td {
              display: inline-block !important;
            }
            .es-desk-hidden {
              display: table-row !important;
              width: auto !important;
              overflow: visible !important;
              max-height: inherit !important;
            }
            .es-m-p5 {
              padding: 5px !important;
            }
            .es-m-p5t {
              padding-top: 5px !important;
            }
            .es-m-p5b {
              padding-bottom: 5px !important;
            }
            .es-m-p5r {
              padding-right: 5px !important;
            }
            .es-m-p5l {
              padding-left: 5px !important;
            }
            .es-m-p10 {
              padding: 10px !important;
            }
            .es-m-p10t {
              padding-top: 10px !important;
            }
            .es-m-p10b {
              padding-bottom: 10px !important;
            }
            .es-m-p10r {
              padding-right: 10px !important;
            }
            .es-m-p10l {
              padding-left: 10px !important;
            }
            .es-m-p15 {
              padding: 15px !important;
            }
            .es-m-p15t {
              padding-top: 15px !important;
            }
            .es-m-p15b {
              padding-bottom: 15px !important;
            }
            .es-m-p15r {
              padding-right: 15px !important;
            }
            .es-m-p15l {
              padding-left: 15px !important;
            }
            .es-m-p20 {
              padding: 20px !important;
            }
            .es-m-p20t {
              padding-top: 20px !important;
            }
            .es-m-p20r {
              padding-right: 20px !important;
            }
            .es-m-p20l {
              padding-left: 20px !important;
            }
            .es-m-p25 {
              padding: 25px !important;
            }
            .es-m-p25t {
              padding-top: 25px !important;
            }
            .es-m-p25b {
              padding-bottom: 25px !important;
            }
            .es-m-p25r {
              padding-right: 25px !important;
            }
            .es-m-p25l {
              padding-left: 25px !important;
            }
            .es-m-p30 {
              padding: 30px !important;
            }
            .es-m-p30t {
              padding-top: 30px !important;
            }
            .es-m-p30b {
              padding-bottom: 30px !important;
            }
            .es-m-p30r {
              padding-right: 30px !important;
            }
            .es-m-p30l {
              padding-left: 30px !important;
            }
            .es-m-p35 {
              padding: 35px !important;
            }
            .es-m-p35t {
              padding-top: 35px !important;
            }
            .es-m-p35b {
              padding-bottom: 35px !important;
            }
            .es-m-p35r {
              padding-right: 35px !important;
            }
            .es-m-p35l {
              padding-left: 35px !important;
            }
            .es-m-p40 {
              padding: 40px !important;
            }
            .es-m-p40t {
              padding-top: 40px !important;
            }
            .es-m-p40b {
              padding-bottom: 40px !important;
            }
            .es-m-p40r {
              padding-right: 40px !important;
            }
            .es-m-p40l {
              padding-left: 40px !important;
            }
          }
        </style>
      </head>
      <body
        style="
          width: 100%;
          font-family: Poppins, sans-serif;
          -webkit-text-size-adjust: 100%;
          -ms-text-size-adjust: 100%;
          padding: 0;
          margin: 0;
        "
      >
        <div class="es-wrapper-color" style="background-color: #2e0249">
          <!--[if gte mso 9
            ]><v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t"
              ><v:fill type="tile" color="#2E0249"></v:fill></v:background
          ><![endif]-->
          <table
            class="es-wrapper"
            width="100%"
            cellspacing="0"
            cellpadding="0"
            style="
              mso-table-lspace: 0;
              mso-table-rspace: 0;
              border-collapse: collapse;
              border-spacing: 0;
              padding: 0;
              margin: 0;
              width: 100%;
              height: 100%;
              background-repeat: repeat;
              background-position: center top;
              background-color: #2e0249;
            "
          >
            <tr>
              <td valign="top" style="padding: 0; margin: 0">
                <table
                  cellpadding="0"
                  cellspacing="0"
                  class="es-header es-mobile-hidden"
                  align="center"
                  style="
                    mso-table-lspace: 0;
                    mso-table-rspace: 0;
                    border-collapse: collapse;
                    border-spacing: 0;
                    table-layout: fixed !important;
                    width: 100%;
                    background-color: #570a57;
                    background-repeat: repeat;
                    background-position: center top;
                  "
                >
                  <tr>
                    <td
                      align="center"
                      bgcolor="#2e0249"
                      style="padding: 0; margin: 0; background-color: #2e0249"
                    >
                      <table
                        bgcolor="#2e0249"
                        class="es-header-body"
                        align="center"
                        cellpadding="0"
                        cellspacing="0"
                        style="
                          mso-table-lspace: 0;
                          mso-table-rspace: 0;
                          border-collapse: collapse;
                          border-spacing: 0;
                          background-color: #2e0249;
                          width: 600px;
                        "
                      >
                        <tr>
                          <td
                            class="esdev-adapt-off"
                            align="left"
                            style="padding: 20px; margin: 0"
                          >
                            <table
                              cellpadding="0"
                              cellspacing="0"
                              class="esdev-mso-table"
                              style="
                                mso-table-lspace: 0;
                                mso-table-rspace: 0;
                                border-collapse: collapse;
                                border-spacing: 0;
                                width: 560px;
                              "
                            >
                              <tr>
                                <td
                                  class="esdev-mso-td"
                                  valign="top"
                                  style="padding: 0; margin: 0"
                                >
                                  <table
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="es-left"
                                    align="left"
                                    style="
                                      mso-table-lspace: 0;
                                      mso-table-rspace: 0;
                                      border-collapse: collapse;
                                      border-spacing: 0;
                                      float: left;
                                    "
                                  >
                                    <tr>
                                      <td
                                        class="es-m-p0r"
                                        valign="top"
                                        align="center"
                                        style="padding: 0; margin: 0; width: 73px"
                                      >
                                        <table
                                          cellpadding="0"
                                          cellspacing="0"
                                          width="100%"
                                          role="presentation"
                                          style="
                                            mso-table-lspace: 0;
                                            mso-table-rspace: 0;
                                            border-collapse: collapse;
                                            border-spacing: 0;
                                          "
                                        >
                                          <tr>
                                            <td
                                              align="left"
                                              class="es-m-txt-l"
                                              style="
                                                padding: 0;
                                                margin: 0;
                                                font-size: 0;
                                              "
                                            >
                                              <a
                                                target="_blank"
                                                href="https://github.com/arey-pranay"
                                                style="
                                                  -webkit-text-size-adjust: none;
                                                  -ms-text-size-adjust: none;
                                                  mso-line-height-rule: exactly;
                                                  text-decoration: underline;
                                                  color: #f6c6ea;
                                                  font-size: 14px;
                                                "
                                                ><img
                                                  src="https://xgfbfb.stripocdn.email/content/guids/CABINET_6238642ba45954e6d6ce5fb7661d4679/images/finger_16converted_BrK.png"
                                                  alt
                                                  style="
                                                    display: block;
                                                    border: 0;
                                                    outline: 0;
                                                    text-decoration: none;
                                                    -ms-interpolation-mode: bicubic;
                                                  "
                                                  width="60"
                                                  height="67"
                                              /></a>
                                            </td>
                                          </tr>
                                        </table>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                                <td style="padding: 0; margin: 0; width: 20px"></td>
                                <td
                                  class="esdev-mso-td"
                                  valign="top"
                                  style="padding: 0; margin: 0"
                                >
                                  <table
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="es-right"
                                    align="right"
                                    style="
                                      mso-table-lspace: 0;
                                      mso-table-rspace: 0;
                                      border-collapse: collapse;
                                      border-spacing: 0;
                                      float: right;
                                    "
                                  >
                                    <tr>
                                      <td
                                        align="left"
                                        style="padding: 0; margin: 0; width: 467px"
                                      >
                                        <table
                                          cellpadding="0"
                                          cellspacing="0"
                                          width="100%"
                                          role="presentation"
                                          style="
                                            mso-table-lspace: 0;
                                            mso-table-rspace: 0;
                                            border-collapse: collapse;
                                            border-spacing: 0;
                                          "
                                        >
                                          <tr>
                                            <td
                                              align="right"
                                              class="es-m-txt-r"
                                              style="
                                                padding: 0;
                                                margin: 0;
                                                padding-top: 5px;
                                                padding-bottom: 5px;
                                                font-size: 0;
                                              "
                                            >
                                              <a
                                                target="_blank"
                                                href="https://github.com/arey-pranay"
                                                style="
                                                  -webkit-text-size-adjust: none;
                                                  -ms-text-size-adjust: none;
                                                  mso-line-height-rule: exactly;
                                                  text-decoration: underline;
                                                  color: #f6c6ea;
                                                  font-size: 14px;
                                                "
                                                ><img
                                                  src="https://xgfbfb.stripocdn.email/content/guids/CABINET_9b143e749e3aaed3697507da71b3bd7b7e0aa7b60b3fdc77ad722f0ebae80f8e/images/bellremindernotificationalertalarmiconsignsymbolapplicationwebsiteuiwhitebackground.png"
                                                  alt
                                                  style="
                                                    display: block;
                                                    border: 0;
                                                    outline: 0;
                                                    text-decoration: none;
                                                    -ms-interpolation-mode: bicubic;
                                                  "
                                                  width="45"
                                                  height="50"
                                              /></a>
                                            </td>
                                          </tr>
                                        </table>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
                <table
                  cellpadding="0"
                  cellspacing="0"
                  class="es-content"
                  align="center"
                  style="
                    mso-table-lspace: 0;
                    mso-table-rspace: 0;
                    border-collapse: collapse;
                    border-spacing: 0;
                    table-layout: fixed !important;
                    width: 100%;
                  "
                >
                  <tr>
                    <td
                      align="center"
                      style="
                        padding: 0;
                        margin: 0;
                        background-size: initial;
                        background-attachment: initial;
                        background-origin: initial;
                        background-clip: initial;
                        background-color: initial;
                      "
                    >
                      <table
                        class="es-content-body"
                        align="center"
                        cellpadding="0"
                        cellspacing="0"
                        style="
                          mso-table-lspace: 0;
                          mso-table-rspace: 0;
                          border-collapse: collapse;
                          border-spacing: 0;
                          background-color: transparent;
                          width: 600px;
                        "
                      >
                        <tr>
                          <td
                            align="left"
                            style="
                              margin: 0;
                              padding-left: 20px;
                              padding-right: 20px;
                              padding-top: 40px;
                              padding-bottom: 40px;
                              border-radius: 20px;
                              background-image: url(https://xgfbfb.stripocdn.email/content/guids/CABINET_9b143e749e3aaed3697507da71b3bd7b7e0aa7b60b3fdc77ad722f0ebae80f8e/images/meshgradient_3.png);
                              background-repeat: no-repeat;
                              background-position: center center;
                            "
                            background="https://xgfbfb.stripocdn.email/content/guids/CABINET_9b143e749e3aaed3697507da71b3bd7b7e0aa7b60b3fdc77ad722f0ebae80f8e/images/meshgradient_3.png"
                          >
                            <table
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              style="
                                mso-table-lspace: 0;
                                mso-table-rspace: 0;
                                border-collapse: collapse;
                                border-spacing: 0;
                              "
                            >
                              <tr>
                                <td
                                  align="center"
                                  valign="top"
                                  style="padding: 0; margin: 0; width: 560px"
                                >
                                  <table
                                    cellpadding="0"
                                    cellspacing="0"
                                    width="100%"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0;
                                      mso-table-rspace: 0;
                                      border-collapse: collapse;
                                      border-spacing: 0;
                                    "
                                  >
                                    <tr>
                                      <td
                                        align="center"
                                        class="es-m-txt-l"
                                        style="padding: 0; margin: 0"
                                      >
                                        <h1
                                          style="
                                            margin: 0;
                                            line-height: 48px;
                                            mso-line-height-rule: exactly;
                                            font-family: 'Krona One', sans-serif;
                                            font-size: 40px;
                                            font-style: normal;
                                            font-weight: 700;
                                            color: #2e0249;
                                          "
                                        >
                                          Welcome to ViMeet
                                        </h1>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td
                                        align="center"
                                        class="es-m-txt-l"
                                        style="
                                          padding: 0;
                                          margin: 0;
                                          padding-bottom: 20px;
                                          padding-top: 30px;
                                          font-size: 0;
                                        "
                                      >
                                        <a
                                          target="_blank"
                                          href="https://github.com/arey-pranay"
                                          style="
                                            -webkit-text-size-adjust: none;
                                            -ms-text-size-adjust: none;
                                            mso-line-height-rule: exactly;
                                            text-decoration: underline;
                                            color: #666;
                                            font-size: 14px;
                                          "
                                          ><img
                                            src="https://xgfbfb.stripocdn.email/content/guids/CABINET_23778726bdd6fba4bef415811244732d8e5f06afef6b2d541bdf9700b0fdbea8/images/image_2.png"
                                            alt="Christina Scott"
                                            style="
                                              display: block;
                                              border: 0;
                                              outline: 0;
                                              text-decoration: none;
                                              -ms-interpolation-mode: bicubic;
                                              border-radius: 20px;
                                            "
                                            width="100"
                                            title="Christina Scott"
                                            height="86"
                                        /></a>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td
                                        align="center"
                                        class="es-m-txt-l"
                                        style="padding: 0; margin: 0"
                                      >
                                        <h2
                                          style="
                                            margin: 0;
                                            line-height: 29px;
                                            mso-line-height-rule: exactly;
                                            font-family: 'Krona One', sans-serif;
                                            font-size: 24px;
                                            font-style: normal;
                                            font-weight: 700;
                                            color: #2e0249;
                                          "
                                        >
                                          from&nbsp;Pranay Parikh
                                        </h2>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td
                                        align="center"
                                        class="es-m-txt-l es-m-p0r es-m-p0l"
                                        style="
                                          margin: 0;
                                          padding-top: 10px;
                                          padding-left: 15px;
                                          padding-right: 15px;
                                          padding-bottom: 20px;
                                        "
                                      >
                                        <p
                                          style="
                                            margin: 0;
                                            -webkit-text-size-adjust: none;
                                            -ms-text-size-adjust: none;
                                            mso-line-height-rule: exactly;
                                            font-family: Poppins, sans-serif;
                                            line-height: 21px;
                                            color: #999;
                                            font-size: 14px;
                                          "
                                        >
                                          1 messages
                                        </p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td
                                        align="center"
                                        class="es-m-p0r es-m-p0l es-m-txt-l"
                                        style="
                                          margin: 0;
                                          padding-left: 15px;
                                          padding-right: 15px;
                                          padding-top: 20px;
                                          padding-bottom: 30px;
                                        "
                                      >
                                        <p
                                          style="
                                            margin: 0;
                                            -webkit-text-size-adjust: none;
                                            -ms-text-size-adjust: none;
                                            mso-line-height-rule: exactly;
                                            font-family: Poppins, sans-serif;
                                            line-height: 21px;
                                            color: #666;
                                            font-size: 14px;
                                          "
                                        >
                                          <br />
                                        </p>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                              <tr>
                                <td
                                  align="center"
                                  valign="top"
                                  style="
                                    padding: 0;
                                    margin: 0;
                                    border-radius: 20px;
                                    overflow: hidden;
                                    width: 560px;
                                  "
                                >
                                  <table
                                    cellpadding="0"
                                    cellspacing="0"
                                    width="100%"
                                    bgcolor="#ffffff"
                                    style="
                                      mso-table-lspace: 0;
                                      mso-table-rspace: 0;
                                      border-collapse: separate;
                                      border-spacing: 0;
                                      border-left: 1px solid #efefef;
                                      border-right: 1px solid #dddcdc;
                                      border-top: 1px solid #efefef;
                                      border-bottom: 1px solid #dddcdc;
                                      background-color: #fff;
                                      border-radius: 20px;
                                    "
                                    role="presentation"
                                  >
                                    <tr>
                                      <td
                                        align="left"
                                        style="
                                          padding: 0;
                                          margin: 0;
                                          padding-top: 20px;
                                          padding-left: 20px;
                                          padding-right: 20px;
                                        "
                                      >
                                        <p
                                          style="
                                            margin: 0;
                                            -webkit-text-size-adjust: none;
                                            -ms-text-size-adjust: none;
                                            mso-line-height-rule: exactly;
                                            font-family: Poppins, sans-serif;
                                            line-height: 21px;
                                            color: #666;
                                            font-size: 14px;
                                          "
                                        >
                                          <b>arey_pranay</b>
                                        </p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td
                                        align="left"
                                        style="
                                          padding: 0;
                                          margin: 0;
                                          padding-top: 10px;
                                          padding-left: 20px;
                                          padding-right: 20px;
                                        "
                                      >
                                        <p
                                          style="
                                            margin: 0;
                                            -webkit-text-size-adjust: none;
                                            -ms-text-size-adjust: none;
                                            mso-line-height-rule: exactly;
                                            font-family: 'courier new', courier,
                                              'lucida sans typewriter',
                                              'lucida typewriter', monospace;
                                            line-height: 21px;
                                            color: #666;
                                            font-size: 14px;
                                          "
                                        >
                                          <br />
                                        </p>
                                        <p
                                          style="
                                            margin: 0;
                                            -webkit-text-size-adjust: none;
                                            -ms-text-size-adjust: none;
                                            mso-line-height-rule: exactly;
                                            font-family: 'courier new', courier,
                                              'lucida sans typewriter',
                                              'lucida typewriter', monospace;
                                            line-height: 21px;
                                            color: #666;
                                            font-size: 14px;
                                          "
                                        >
                                          Hey ${name}, I'm glad to see you joining
                                          ViMeet, get ready for a hell lot of fun
                                          and an amazing socializing experience with
                                          yourr fellow VITians.&nbsp;And&nbsp;we're
                                          here to support you every step of the way,
                                          if you see something serious like
                                          cyberbullying or id theft,
                                          directly&nbsp;DM me on LinkedIn.&nbsp;
                                        </p>
                                        <p
                                          style="
                                            margin: 0;
                                            -webkit-text-size-adjust: none;
                                            -ms-text-size-adjust: none;
                                            mso-line-height-rule: exactly;
                                            font-family: 'courier new', courier,
                                              'lucida sans typewriter',
                                              'lucida typewriter', monospace;
                                            line-height: 21px;
                                            color: #666;
                                            font-size: 14px;
                                          "
                                        >
                                          <br />
                                        </p>
                                        <p
                                          style="
                                            margin: 0;
                                            -webkit-text-size-adjust: none;
                                            -ms-text-size-adjust: none;
                                            mso-line-height-rule: exactly;
                                            font-family: 'courier new', courier,
                                              'lucida sans typewriter',
                                              'lucida typewriter', monospace;
                                            line-height: 21px;
                                            color: #666;
                                            font-size: 14px;
                                          "
                                        >
                                          Have Fun !
                                        </p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td
                                        align="right"
                                        style="
                                          padding: 0;
                                          margin: 0;
                                          padding-bottom: 15px;
                                          padding-left: 20px;
                                          padding-right: 20px;
                                        "
                                      >
                                        <p
                                          style="
                                            margin: 0;
                                            -webkit-text-size-adjust: none;
                                            -ms-text-size-adjust: none;
                                            mso-line-height-rule: exactly;
                                            font-family: Poppins, sans-serif;
                                            line-height: 17px;
                                            color: #666;
                                            font-size: 14px;
                                          "
                                        >
                                          <br />
                                        </p>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                              <tr>
                                <td
                                  align="center"
                                  valign="top"
                                  style="padding: 0; margin: 0; width: 560px"
                                >
                                  <table
                                    cellpadding="0"
                                    cellspacing="0"
                                    width="100%"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0;
                                      mso-table-rspace: 0;
                                      border-collapse: collapse;
                                      border-spacing: 0;
                                    "
                                  >
                                    <tr>
                                      <td
                                        align="center"
                                        style="
                                          padding: 0;
                                          margin: 0;
                                          padding-top: 20px;
                                        "
                                      >
                                        <span
                                          class="es-button-border"
                                          style="
                                            border-style: solid;
                                            border-color: #fff;
                                            background: #fc78c0;
                                            border-width: 0;
                                            display: inline-block;
                                            border-radius: 10px;
                                            width: auto;
                                          "
                                          ><a
                                            href="${url}"
                                            class="es-button"
                                            target="_blank"
                                            style="
                                              mso-style-priority: 100 !important;
                                              text-decoration: none;
                                              -webkit-text-size-adjust: none;
                                              -ms-text-size-adjust: none;
                                              mso-line-height-rule: exactly;
                                              color: #fff;
                                              font-size: 18px;
                                              display: inline-block;
                                              background: #fc78c0;
                                              border-radius: 10px;
                                              font-family: 'Krona One', sans-serif;
                                              font-weight: 400;
                                              font-style: normal;
                                              line-height: 22px;
                                              width: auto;
                                              text-align: center;
                                              padding: 10px 20px 10px 20px;
                                              mso-padding-alt: 0;
                                              mso-border-alt: 10px solid #fc78c0;
                                            "
                                            >Verify your ID</a
                                          ></span
                                        >
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                        <tr>
                          <td
                            align="left"
                            style="
                              padding: 0;
                              margin: 0;
                              padding-top: 20px;
                              padding-left: 20px;
                              padding-right: 20px;
                            "
                          >
                            <table
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              style="
                                mso-table-lspace: 0;
                                mso-table-rspace: 0;
                                border-collapse: collapse;
                                border-spacing: 0;
                              "
                            >
                              <tr>
                                <td
                                  align="center"
                                  valign="top"
                                  style="padding: 0; margin: 0; width: 560px"
                                >
                                  <table
                                    cellpadding="0"
                                    cellspacing="0"
                                    width="100%"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0;
                                      mso-table-rspace: 0;
                                      border-collapse: collapse;
                                      border-spacing: 0;
                                    "
                                  >
                                    <tr>
                                      <td
                                        align="center"
                                        height="0"
                                        style="padding: 0; margin: 0"
                                      ></td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
                <table
                  cellpadding="0"
                  cellspacing="0"
                  class="es-content"
                  align="center"
                  style="
                    mso-table-lspace: 0;
                    mso-table-rspace: 0;
                    border-collapse: collapse;
                    border-spacing: 0;
                    table-layout: fixed !important;
                    width: 100%;
                  "
                >
                  <tr>
                    <td align="center" style="padding: 0; margin: 0">
                      <table
                        bgcolor="#ffffff"
                        class="es-content-body"
                        align="center"
                        cellpadding="0"
                        cellspacing="0"
                        style="
                          mso-table-lspace: 0;
                          mso-table-rspace: 0;
                          border-collapse: separate;
                          border-spacing: 0;
                          background-color: transparent;
                          border-radius: 10px;
                          width: 600px;
                        "
                      >
                        <tr>
                          <td
                            align="left"
                            style="
                              padding: 0;
                              margin: 0;
                              padding-left: 20px;
                              padding-right: 20px;
                              padding-top: 40px;
                              border-left: 2px solid #f6c6ea;
                              border-right: 2px solid #f6c6ea;
                              border-top: 2px solid #f6c6ea;
                              border-radius: 20px 20px 0 0;
                            "
                          >
                            <table
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              style="
                                mso-table-lspace: 0;
                                mso-table-rspace: 0;
                                border-collapse: collapse;
                                border-spacing: 0;
                              "
                            >
                              <tr>
                                <td
                                  align="center"
                                  valign="top"
                                  style="padding: 0; margin: 0; width: 556px"
                                >
                                  <table
                                    cellpadding="0"
                                    cellspacing="0"
                                    width="100%"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0;
                                      mso-table-rspace: 0;
                                      border-collapse: collapse;
                                      border-spacing: 0;
                                    "
                                  >
                                    <tr>
                                      <td
                                        align="center"
                                        style="padding: 0; margin: 0"
                                      >
                                        <h2
                                          style="
                                            margin: 0;
                                            line-height: 29px;
                                            mso-line-height-rule: exactly;
                                            font-family: 'Krona One', sans-serif;
                                            font-size: 24px;
                                            font-style: normal;
                                            font-weight: 700;
                                            color: #f6c6ea;
                                          "
                                        >
                                          Liked the email ?
                                        </h2>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                        <tr>
                          <td
                            class="esdev-adapt-off"
                            align="left"
                            style="
                              padding: 20px;
                              margin: 0;
                              border-left: 2px solid #f6c6ea;
                              border-right: 2px solid #f6c6ea;
                              border-bottom: 2px solid #f6c6ea;
                              border-radius: 0 0 20px 20px;
                            "
                          >
                            <table
                              cellpadding="0"
                              cellspacing="0"
                              class="esdev-mso-table"
                              style="
                                mso-table-lspace: 0;
                                mso-table-rspace: 0;
                                border-collapse: collapse;
                                border-spacing: 0;
                                width: 560px;
                              "
                            >
                              <tr>
                                <td
                                  class="esdev-mso-td"
                                  valign="top"
                                  style="padding: 0; margin: 0"
                                >
                                  <table
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="es-left"
                                    align="left"
                                    style="
                                      mso-table-lspace: 0;
                                      mso-table-rspace: 0;
                                      border-collapse: collapse;
                                      border-spacing: 0;
                                      float: left;
                                    "
                                  >
                                    <tr>
                                      <td
                                        align="left"
                                        style="padding: 0; margin: 0; width: 268px"
                                      >
                                        <table
                                          cellpadding="0"
                                          cellspacing="0"
                                          width="100%"
                                          role="presentation"
                                          style="
                                            mso-table-lspace: 0;
                                            mso-table-rspace: 0;
                                            border-collapse: collapse;
                                            border-spacing: 0;
                                          "
                                        >
                                          <tr>
                                            <td
                                              align="right"
                                              style="
                                                padding: 0;
                                                margin: 0;
                                                font-size: 0;
                                              "
                                            >
                                              <a
                                                target="_blank"
                                                href="https://www.linkedin.com/in/pranay-parikh-530331218/"
                                                style="
                                                  -webkit-text-size-adjust: none;
                                                  -ms-text-size-adjust: none;
                                                  mso-line-height-rule: exactly;
                                                  text-decoration: underline;
                                                  color: #666;
                                                  font-size: 14px;
                                                "
                                                ><img
                                                  src="https://xgfbfb.stripocdn.email/content/guids/CABINET_6238642ba45954e6d6ce5fb7661d4679/images/5285522.png"
                                                  alt="Yes"
                                                  style="
                                                    display: block;
                                                    border: 0;
                                                    outline: 0;
                                                    text-decoration: none;
                                                    -ms-interpolation-mode: bicubic;
                                                  "
                                                  height="50"
                                                  title="Yes"
                                                  width="65"
                                              /></a>
                                            </td>
                                          </tr>
                                        </table>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                                <td style="padding: 0; margin: 0; width: 20px"></td>
                                <td
                                  class="esdev-mso-td"
                                  valign="top"
                                  style="padding: 0; margin: 0"
                                >
                                  <table
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="es-right"
                                    align="right"
                                    style="
                                      mso-table-lspace: 0;
                                      mso-table-rspace: 0;
                                      border-collapse: collapse;
                                      border-spacing: 0;
                                      float: right;
                                    "
                                  >
                                    <tr>
                                      <td
                                        align="left"
                                        style="padding: 0; margin: 0; width: 268px"
                                      >
                                        <table
                                          cellpadding="0"
                                          cellspacing="0"
                                          width="100%"
                                          role="presentation"
                                          style="
                                            mso-table-lspace: 0;
                                            mso-table-rspace: 0;
                                            border-collapse: collapse;
                                            border-spacing: 0;
                                          "
                                        >
                                          <tr>
                                            <td
                                              align="left"
                                              style="
                                                padding: 0;
                                                margin: 0;
                                                font-size: 0;
                                              "
                                            >
                                              <a
                                                target="_blank"
                                                href="https://www.linkedin.com/in/pranay-parikh-530331218/"
                                                style="
                                                  -webkit-text-size-adjust: none;
                                                  -ms-text-size-adjust: none;
                                                  mso-line-height-rule: exactly;
                                                  text-decoration: underline;
                                                  color: #666;
                                                  font-size: 14px;
                                                "
                                                ><img
                                                  src="https://xgfbfb.stripocdn.email/content/guids/CABINET_6238642ba45954e6d6ce5fb7661d4679/images/5285522_Zhf.png"
                                                  alt="No"
                                                  style="
                                                    display: block;
                                                    border: 0;
                                                    outline: 0;
                                                    text-decoration: none;
                                                    -ms-interpolation-mode: bicubic;
                                                  "
                                                  height="50"
                                                  title="No"
                                                  width="65"
                                              /></a>
                                            </td>
                                          </tr>
                                        </table>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
                <table
                  cellpadding="0"
                  cellspacing="0"
                  class="es-footer"
                  align="center"
                  style="
                    mso-table-lspace: 0;
                    mso-table-rspace: 0;
                    border-collapse: collapse;
                    border-spacing: 0;
                    table-layout: fixed !important;
                    width: 100%;
                    background-color: transparent;
                    background-repeat: repeat;
                    background-position: center top;
                  "
                >
                  <tr>
                    <td align="center" style="padding: 0; margin: 0">
                      <table
                        class="es-footer-body"
                        align="center"
                        cellpadding="0"
                        cellspacing="0"
                        bgcolor="#FFFFFF"
                        style="
                          mso-table-lspace: 0;
                          mso-table-rspace: 0;
                          border-collapse: collapse;
                          border-spacing: 0;
                          background-color: #2e0249;
                          border-radius: 0 0 10px 10px;
                          width: 600px;
                        "
                      >
                        <tr>
                          <td
                            align="left"
                            style="
                              margin: 0;
                              padding-left: 20px;
                              padding-right: 20px;
                              padding-top: 30px;
                              padding-bottom: 30px;
                            "
                          >
                            <table
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              style="
                                mso-table-lspace: 0;
                                mso-table-rspace: 0;
                                border-collapse: collapse;
                                border-spacing: 0;
                              "
                            >
                              <tr>
                                <td
                                  align="left"
                                  style="padding: 0; margin: 0; width: 560px"
                                >
                                  <table
                                    cellpadding="0"
                                    cellspacing="0"
                                    width="100%"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0;
                                      mso-table-rspace: 0;
                                      border-collapse: collapse;
                                      border-spacing: 0;
                                    "
                                  >
                                    <tr>
                                      <td style="padding: 0; margin: 0">
                                        <table
                                          cellpadding="0"
                                          cellspacing="0"
                                          width="100%"
                                          class="es-menu"
                                          role="presentation"
                                          style="
                                            mso-table-lspace: 0;
                                            mso-table-rspace: 0;
                                            border-collapse: collapse;
                                            border-spacing: 0;
                                          "
                                        ></table>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td
                                        align="center"
                                        style="
                                          padding: 0;
                                          margin: 0;
                                          padding-top: 10px;
                                          padding-bottom: 10px;
                                          font-size: 0;
                                        "
                                      >
                                        <table
                                          cellpadding="0"
                                          cellspacing="0"
                                          class="es-table-not-adapt es-social"
                                          role="presentation"
                                          style="
                                            mso-table-lspace: 0;
                                            mso-table-rspace: 0;
                                            border-collapse: collapse;
                                            border-spacing: 0;
                                          "
                                        >
                                          <tr>
                                            <td
                                              align="center"
                                              valign="top"
                                              style="
                                                padding: 0;
                                                margin: 0;
                                                padding-right: 20px;
                                              "
                                            >
                                              <a
                                                target="_blank"
                                                href="https://www.linkedin.com/in/pranay-parikh-530331218/"
                                                style="
                                                  -webkit-text-size-adjust: none;
                                                  -ms-text-size-adjust: none;
                                                  mso-line-height-rule: exactly;
                                                  text-decoration: underline;
                                                  color: #f6c6ea;
                                                  font-size: 12px;
                                                "
                                                ><img
                                                  title="LinkedIn"
                                                  src="https://xgfbfb.stripocdn.email/content/assets/img/social-icons/circle-white/linkedin-circle-white.png"
                                                  alt="Fb"
                                                  width="24"
                                                  height="24"
                                                  style="
                                                    display: block;
                                                    border: 0;
                                                    outline: 0;
                                                    text-decoration: none;
                                                    -ms-interpolation-mode: bicubic;
                                                  "
                                              /></a>
                                            </td>
                                            <td
                                              align="center"
                                              valign="top"
                                              style="
                                                padding: 0;
                                                margin: 0;
                                                padding-right: 20px;
                                              "
                                            >
                                              <a
                                                target="_blank"
                                                href="https://www.github.com/arey-pranay/"
                                                style="
                                                  -webkit-text-size-adjust: none;
                                                  -ms-text-size-adjust: none;
                                                  mso-line-height-rule: exactly;
                                                  text-decoration: underline;
                                                  color: #f6c6ea;
                                                  font-size: 12px;
                                                "
                                                ><img
                                                  title="GitHub"
                                                  src="https://i.ibb.co/9pyW1FR/github-pages-logo-repository-fork-github-86eddab19cbc3ae293ada0fe0fb9e27d.png"
                                                  alt="Fb"
                                                  width="24"
                                                  height="24"
                                                  style="
                                                    display: block;
                                                    border: 0;
                                                    outline: 0;
                                                    text-decoration: none;
                                                    -ms-interpolation-mode: bicubic;
                                                  "
                                              /></a>
                                            </td>
                                            <td
                                              align="center"
                                              valign="top"
                                              style="padding: 0; margin: 0"
                                            >
                                              <a
                                                target="_blank"
                                                href="https://instagram.com/arey_pranay"
                                                style="
                                                  -webkit-text-size-adjust: none;
                                                  -ms-text-size-adjust: none;
                                                  mso-line-height-rule: exactly;
                                                  text-decoration: underline;
                                                  color: #f6c6ea;
                                                  font-size: 12px;
                                                "
                                                ><img
                                                  title="Instagram"
                                                  src="https://xgfbfb.stripocdn.email/content/assets/img/social-icons/circle-white/instagram-circle-white.png"
                                                  alt="Yt"
                                                  width="24"
                                                  height="24"
                                                  style="
                                                    display: block;
                                                    border: 0;
                                                    outline: 0;
                                                    text-decoration: none;
                                                    -ms-interpolation-mode: bicubic;
                                                  "
                                              /></a>
                                            </td>
                                          </tr>
                                        </table>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td
                                        align="center"
                                        style="
                                          padding: 0;
                                          margin: 0;
                                          padding-top: 10px;
                                          padding-bottom: 10px;
                                        "
                                      >
                                        <p
                                          style="
                                            margin: 0;
                                            -webkit-text-size-adjust: none;
                                            -ms-text-size-adjust: none;
                                            mso-line-height-rule: exactly;
                                            font-family: Poppins, sans-serif;
                                            line-height: 18px;
                                            color: #f6c6ea;
                                            font-size: 12px;
                                          "
                                        >
                                          Have some issues, suggestions, requests ?
                                          HMU on LinkedIn.<br />
                                          Pranay Parikh <br />
                                          Signing off<br />
                                        </p>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                        <tr>
                          <td align="left" style="padding: 20px; margin: 0">
                            <table
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              style="
                                mso-table-lspace: 0;
                                mso-table-rspace: 0;
                                border-collapse: collapse;
                                border-spacing: 0;
                              "
                            >
                              <tr>
                                <td
                                  align="left"
                                  style="padding: 0; margin: 0; width: 560px"
                                >
                                  <table
                                    cellpadding="0"
                                    cellspacing="0"
                                    width="100%"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0;
                                      mso-table-rspace: 0;
                                      border-collapse: collapse;
                                      border-spacing: 0;
                                    "
                                  >
                                    <tr>
                                      <td
                                        align="center"
                                        class="made_with"
                                        style="padding: 0; margin: 0; font-size: 0"
                                      >
                                        <a
                                          target="_blank"
                                          href="https://github.com/arey-pranay"
                                          style="
                                            -webkit-text-size-adjust: none;
                                            -ms-text-size-adjust: none;
                                            mso-line-height-rule: exactly;
                                            text-decoration: underline;
                                            color: #f6c6ea;
                                            font-size: 12px;
                                          "
                                          ><img
                                            src="https://xgfbfb.stripocdn.email/content/guids/CABINET_23778726bdd6fba4bef415811244732d8e5f06afef6b2d541bdf9700b0fdbea8/images/log_trC.png"
                                            alt
                                            width="125"
                                            style="
                                              display: block;
                                              border: 0;
                                              outline: 0;
                                              text-decoration: none;
                                              -ms-interpolation-mode: bicubic;
                                            "
                                            height="125"
                                        /></a>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </div>
      </body>
    </html>
    `,
  };
  stmp.sendMail(mailOptions, (err, res) => {
    if (err) return err;
    return res;
  });
};
