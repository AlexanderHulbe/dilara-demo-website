import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { Link } from "react-router-dom";


const About = () => {
  const subheading = "sm:text-[18px] text-[14px] text-white uppercase tracking-wider"
  return (
    <div className="relative w-full h-[auto] mx-auto">
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Imprint</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="leading-[30px] max-w-3xl"
      >
        <p className={subheading}>Legal Notice</p>
        <p className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
          ALHUMEDIA <br />
          <Link to="mailto:info@alhumedia.com" target="_blank" style={{color:'rgba(3, 143, 252, 0.8)',textDecoration: 'underline'}}>info@alhumedia.com</Link> <br />
          Address and telefon number available on request<br /><br />

          Represented by: <br />
          Alexander Hulbe <br /><br />

          This Legal Notice complies with the German laws under § 5 TMG and § 55 RStV.
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="leading-[30px] max-w-3xl pt-[1rem]"
      >
        <p className={subheading}>Liability for Content</p>
        <p className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
          The contents of our website have been created with the greatest possible care. However, we cannot guarantee the contents' accuracy, completeness, or topicality. According to Section 7, paragraph 1 of the TMG (Telemediengesetz - German Telemedia Act), we as service providers are liable for our content on these pages by general laws. However, according to Sections 8 to 10 of the TMG, we service providers are not obliged to monitor external information transmitted or stored or investigate circumstances pointing to illegal activity. Obligations to remove or block the use of information under general laws remain unaffected. However, a liability in this regard is only possible from the moment of knowledge of a specific infringement. Upon notification of such violations, we will remove the content immediately.
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="leading-[30px] max-w-3xl pt-[1rem]"
      >
        <p className={subheading}>Liability for Links</p>
        <p className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
          The contents of our website have been created with the greatest possible care. However, we cannot guarantee the contents' accuracy, completeness, or topicality. According to Section 7, paragraph 1 of the TMG (Telemediengesetz - German Telemedia Act), we as service providers are liable for our content on these pages by general laws. However, according to Sections 8 to 10 of the TMG, we service providers are not obliged to monitor external information transmitted or stored or investigate circumstances pointing to illegal activity. Obligations to remove or block the use of information under general laws remain unaffected. However, a liability in this regard is only possible from the moment of knowledge of a specific infringement. Upon notification of such violations, we will remove the content immediately.
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="leading-[30px] max-w-3xl pt-[1rem]"
      >
        <p className={subheading}>Copyright</p>
        <p className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
          The contents and works on these pages created by the site operator are subject to German copyright law. The duplication, processing, distribution, and any kind of utilization outside the limits of copyright require the written consent of the respective author or creator. Downloads and copies of these pages are only permitted for private, non-commercial use. In so far as the contents on this site were not created by the operator, the copyrights of third parties are respected. In particular, third-party content is marked as such. Should you become aware of a copyright infringement, please inform us accordingly. Upon notification of violations, we will remove such contents immediately.
        </p>
      </motion.div>
      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="leading-[30px] max-w-3xl pt-[1rem]"
      >
        <p className={subheading}>Last Updated: 11.09.2023</p>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(About, "imprint");
