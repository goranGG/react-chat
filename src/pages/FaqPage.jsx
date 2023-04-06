import React from "react";
import { Link } from "react-router-dom";

function FaqPage() {
  return (
    <div>
      <h1>FaqPage</h1>
      <Link to="/">Home</Link>
      <div>
        Frequently Asked Questions/ Terms of Use Q: Is this chat application
        free? A: Yes, this chat application is free to use.
        <br />
        Q: Can I use this chat application to harass or bully others? A: No, the
        use of this chat application to harass, bully, or intimidate others is
        strictly prohibited. Users who engage in this behavior may be banned
        from using the chat application.
        <br />
        Q: Is my information secure? A: We take the security of our users'
        information very seriously. We use industry-standard security measures
        to protect user data. However, we cannot guarantee 100% security.
        <br />
        Q: Can I share copyrighted material in the chat application? A: No,
        sharing copyrighted material without the owner's permission is illegal
        and prohibited.
        <br />
        Q: Can I use this chat application to promote my business or services?
        A: No, this chat application is intended for personal use only. Any
        commercial use is strictly prohibited.
        <br />
        Q: What should I do if I encounter inappropriate content or behavior in
        the chat application? A: Please report any inappropriate content or
        behavior to the chat application administrators. We take all reports
        seriously and will take appropriate action.
        <br />
        <br />
        Terms of Use: By using this chat application, you agree to abide by the
        following terms and conditions: You will not use the chat application to
        harass, bully, or intimidate others.
        <br />
        You will not share copyrighted material without the owner's permission.
        <br />
        You will not use the chat application for commercial purposes.
        <br />
        You will not engage in any illegal activity while using the chat
        application.
        <br />
        You understand that the chat application cannot guarantee 100% security
        of your information.
        <br />
        You agree to report any inappropriate content or behavior to the chat
        application administrators.
        <br />
        Violation of these terms and conditions may result in your account being
        suspended or permanently banned from the chat application.
        <br />
      </div>
    </div>
  );
}

export default FaqPage;
