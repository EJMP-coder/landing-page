import { createGlobalStyle } from "styled-components";

export const Styles = createGlobalStyle`

    @font-face {
        font-family: "Motiva Sans Light";
        src: url("/fonts/Motiva-Sans-Light.ttf") format("truetype");
        font-style: normal;
    }

    @font-face {
        font-family: "Motiva Sans Bold";
        src: url("/fonts/Motiva-Sans-Bold.ttf") format("truetype");
        font-style: normal;
    }


    body,
    html,
    a {
        font-family: 'Motiva Sans Light', sans-serif;
    }


    body {
        margin:0;
        padding:0;
        border: 0;
        outline: 0;
        background-color: #F4F7FA;
        background-image: 
            radial-gradient(ellipse 80% 50% at 50% -10%, rgba(186, 230, 253, 0.55), transparent),
            radial-gradient(ellipse 60% 40% at 85% 35%, rgba(167, 243, 208, 0.35), transparent),
            radial-gradient(ellipse 60% 45% at 15% 75%, rgba(199, 210, 254, 0.4), transparent);
        color: #334E68;
        overflow-x: hidden;
    }

    a:hover {
        color: #489FB5;
    }

    input,
    textarea {
        border-radius: 12px;
        border: 1px solid #D1E2F0;
        background: #F0F6FA;
        color: #243B53;
        transition: all 0.3s ease-in-out;  
        outline: none;
        width: 100%;  
        padding: 1rem 1.25rem;

        ::placeholder {
            color: #829AB1;
        }

        :focus-within {
            background: #FFFFFF;
            border-color: #6298BC;
            box-shadow: 0 0 0 3px rgba(98, 152, 188, 0.2);
        }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: 'Motiva Sans Bold', serif;
        color: #243B53;
        font-size: 56px;
        line-height: 1.18;
        letter-spacing: -0.02em;

        @media only screen and (max-width: 890px) {
          font-size: 47px;
        }
      
        @media only screen and (max-width: 414px) {
          font-size: 32px;
        }
    }

    p {
        color: #486581;
        font-size: 21px;        
        line-height: 1.55;
    }

    h1 {
        font-weight: 600;
    }

    a {
        text-decoration: none;
        outline: none;
        color: #3B7A9E;

        :hover {
            color: #489FB5;
        }
    }
    
    *:focus {
        outline: none;
    }

    .about-block-image svg {
        text-align: center;
    }

    .ant-drawer-content {
        background-color: #F8FAFC !important;
        color: #243B53;
    }

    .ant-drawer-body {
        display: flex;
        flex-direction: column;
        text-align: left;
        padding-top: 1.5rem;
        background-color: #F8FAFC;
    }

    .ant-drawer-content-wrapper {
        width: 300px !important;
    }
`;
