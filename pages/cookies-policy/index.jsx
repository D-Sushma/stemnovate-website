import React from "react";
import Container from "~/components/layouts/Container";
import BreadCrumb from "~/components/elements/BreadCrumb";

const breadcrumb = [
    {
        id: 1,
        text: "Home",
        url: "/",
    },

    {
        id: 2,
        text: "Cookies Policy",
    },
];

const CookiesPolicy = () => {
    return (
        <Container title="Cookies Policy">
            <main className="ps-page ps-page--inner">
                <div className="ps-page__header  breadcrumb-h application-breadcrumb-bg">
                    <div className="container ">
                        <BreadCrumb breacrumb={breadcrumb} />
                    </div>
                    <h1 className="text-center  text-white p-2">
                        Cookies Policy
                    </h1>
                </div>
                <div className="container my-5">
                    <h3 className="my-2">What Are Cookies</h3>
                    <p>
                        As is common practice with almost all apps, Stemnovate
                        uses cookies, which are tiny files that are downloaded
                        to your computer, to improve your experience. This page
                        describes what information they gather, how we use it
                        and why we sometimes need to store these cookies. We
                        will also share how you can prevent these cookies from
                        being stored however this may downgrade or ‘break’
                        certain elements of the sites functionality.
                    </p>
                    <h3 className="my-2">How We Use Cookies</h3>
                    <p>
                        We use cookies for a variety of reasons detailed below.
                        Unfortunately in most cases there are no industry
                        standard options for disabling cookies without
                        completely disabling the functionality and features they
                        add to this app. It is recommended that you leave on all
                        cookies if you are not sure whether you need them or not
                        in case they are used to provide a service that you use.
                    </p>

                    <h3 className="my-2">Disabling Cookies</h3>
                    <p>
                        You can prevent the setting of cookies by adjusting the
                        settings on your browser (see your browser Help for how
                        to do this). Be aware that disabling cookies will affect
                        the functionality of this and many other websites that
                        you visit. Disabling cookies will usually result in also
                        disabling certain functionality and features of the this
                        site. Therefore it is recommended that you do not
                        disable cookies.
                    </p>
                    <h3 className="my-2">The Cookies We Set</h3>
                    <p>
                        If you create an account with us then we will use
                        cookies for the management of the signup process and
                        general administration. These cookies will usually be
                        deleted when you log out however in some cases they may
                        remain afterwards to remember your site preferences when
                        logged out.
                    </p>
                    <p>
                        We use cookies when you are logged in so that we can
                        remember this fact. This prevents you from having to log
                        in every single time you visit a new page. These cookies
                        are typically removed or cleared when you log out to
                        ensure that you can only access restricted features and
                        areas when logged in.
                    </p>
                    <p>
                        This app offers newsletter and email notification
                        services, cookies may be used to remember if you are
                        already registered and whether to show certain
                        notifications which might only be valid to
                        subscribed/unsubscribed users.
                    </p>
                    <p>
                        When you submit data to through a form such as those
                        found on contact pages or comment forms cookies may be
                        set to remember your user details for future
                        correspondence.
                    </p>
                    <p>
                        In order to provide you with a great experience on this
                        app we provide the functionality to set your preferences
                        for how this site runs when you use it. In order to
                        remember your preferences we need to set cookies so that
                        this information can be called whenever you interact
                        with a page is affected by your preferences.
                    </p>
                    <h3 className="my-2">Third Party Cookies</h3>
                    <p>
                        In some special cases we also use cookies provided by
                        trusted third parties. The following section details
                        which third party cookies you might encounter through
                        this site.
                    </p>
                    <p>
                        This site uses Google Analytics which is one of the most
                        widespread and trusted analytics solution on the web for
                        helping us to understand how you use the site and ways
                        that we can improve your experience. These cookies may
                        track things such as how long you spend on the site and
                        the pages that you visit so we can continue to produce
                        engaging content.
                    </p>
                    <p>
                        For more information on Google Analytics cookies, see
                        the official Google Analytics page.
                    </p>
                    <p>
                        Third party analytics are used to track and measure
                        usage of this site so that we can continue to produce
                        engaging content. These cookies may track things such as
                        how long you spend on the site or pages you visit which
                        helps us to understand how we can improve the site for
                        you.
                    </p>
                    <p>
                        From time to time we test new features and make subtle
                        changes to the way that the site is delivered. When we
                        are still testing new features these cookies may be used
                        to ensure that you receive a consistent experience
                        whilst on the site whilst ensuring we understand which
                        optimisations our users appreciate the most.
                    </p>
                    <p>
                        We also use social media buttons and/or plugins on this
                        site that allow you to connect with your social network
                        in various ways. For these to work the following social
                        media sites including; Facebook, Twitter & Linkedin will
                        set cookies through our site which may be used to
                        enhance your profile on their site or contribute to the
                        data they hold for various purposes outlined in their
                        respective privacy policies.
                    </p>

                    <h3 className="my-2">More Information</h3>
                    <p>
                        Hopefully that has clarified things for you and as was
                        previously mentioned if there is something that you
                        aren’t sure whether you need or not it’s usually safer
                        to leave cookies enabled in case it does interact with
                        one of the features you use on our site. However if you
                        are still looking for more information then you can
                        contact us at{" "}
                        <a href="mailto:info@stemnovate.co.uk">
                            info@stemnovate.co.uk
                        </a>
                    </p>
                </div>
            </main>
        </Container>
    );
};

export default CookiesPolicy;
