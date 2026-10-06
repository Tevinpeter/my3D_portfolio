import React, { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import emailjs from "@emailjs/browser";

import {styles} from "/src/styles.js";
import { EarthCanvas } from '/components/canvas'
import { SectionWrapper } from '/src/hoc';
import { slideIn } from "/src/utils/motion";

const Contact = () => {
  const reducedMotion = useReducedMotion();
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });
  const sendingRef = useRef(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (sendingRef.current) return;
    if (!form.name.trim() || !form.message.trim()) {
      setStatus({ type: 'error', message: 'Please enter your name and a message.' });
      return;
    }
    sendingRef.current = true;
    setLoading(true);
    setStatus({ type: '', message: '' });

    emailjs
      .send(
        "service_3t9u90f",
        "template_y0hxr0o",
        {
          from_name: form.name,
          to_name: "Tevin",
          from_email: form.email,
          to_email: "tevinpeter74@gmail.com",
          message: form.message,
        },
        'zwOT5J1kPUCDb2lQa'
      )
      .then(
        () => {
          sendingRef.current = false;
          setLoading(false);
          setStatus({ type: 'success', message: "Thank you for reaching out. I'll respond to you at the earliest opportunity." });

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          sendingRef.current = false;
          setLoading(false);
          console.error('Contact delivery failed.', { status: error.status });
          setStatus({ type: 'error', message: 'Something went wrong. Please try again, or use the email link above.' });
        }
      );
  };
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={reducedMotion ? undefined : slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h2 className={styles.sectionHeadText}>Contact.</h2>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          aria-busy={loading}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              required
              autoComplete='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              required
              autoComplete='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              required
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            disabled={loading}
            aria-disabled={loading}
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
          <p role='status' aria-live='polite' aria-atomic='true' className={status.type === 'error' ? 'text-red-300 text-[14px]' : 'text-white-100 text-[14px]'}>
            {status.message}
          </p>
        </form>
      </motion.div>

      <motion.div
        variants={reducedMotion ? undefined : slideIn("right", "tween", 0.2, 1)}
        aria-hidden='true'
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
