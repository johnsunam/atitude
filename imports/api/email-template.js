import React from 'react';
import ReactHTMLEmail from 'react-html-email'
import { Box, Email, Item, Span, renderEmail } from 'react-html-email';

ReactHTMLEmail.injectReactEmailAttributes();

const css = `
@media only screen and (max-device-width: 480px) {
  font-size: 20px !important;
}`.trim();

const ContactMeTemplate = function(props) {
  return <Email title="Hello World!" headCSS={css}>
            <Box>
              <Item>
                <Span>Your pass code:</Span>
              </Item>
              <Item>
                <Span>{props.loginCode}</Span>
              </Item>
            </Box>
        </Email>;
};

// NEW: Add getter function that return the rendered react component (as a string holdign the HTML email code)
export const GetContactEmail = function(code){
  return renderEmail(<ContactMeTemplate loginCode={code} />);
}
