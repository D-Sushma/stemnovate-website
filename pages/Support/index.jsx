import React from "react"
import dynamic from "next/dynamic"

const ContactUsScreen = dynamic(() => import("../contact-us"), {
  loading: () => <p>Loading...</p>
})

const SupportScreen = () => {
  return <ContactUsScreen mytitile="Support" />
}

export default SupportScreen
