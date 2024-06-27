"use client";

import React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { toast } from "../ui/use-toast";
import { useRouter } from "next/navigation";

const FormSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "The fullname must have the minimum of 2 characters" }),
  email: z.string().email(),
  phoneNumber: z.string(),
  destinationFrom: z.string(),
  destinationTo: z.string(),
  project: z.string(),
});

const ContactForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    mode: "onSubmit",
    resolver: zodResolver(FormSchema),
  });
  const route = useRouter();

  const isSubmitting = form.formState.isSubmitting;

  const onFormSubmit = () => {
    toast({
      title: "success",
      description: "The message is sent",
    });

    route.push("/");
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onFormSubmit)}
        className="flex flex-col gap-10 w-full"
      >
        <div className="inline-form--item">
          <FormField
            control={form.control}
            disabled={isSubmitting}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <input
                    type="text"
                    placeholder="Full Name"
                    {...field}
                    className="form-input"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            disabled={isSubmitting}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <input
                    type="text"
                    placeholder="Email"
                    {...field}
                    className="form-input"
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <div className="inline-form--item">
          <FormField
            control={form.control}
            disabled={isSubmitting}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <input
                    type="text"
                    placeholder="Phone Number"
                    {...field}
                    className="form-input"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            disabled={isSubmitting}
            name="destinationFrom"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <input
                    type="text"
                    placeholder="Destination From"
                    {...field}
                    className="form-input"
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          disabled={isSubmitting}
          name="destinationTo"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <input
                  type="text"
                  placeholder="Destination To"
                  {...field}
                  className="form-input"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          disabled={isSubmitting}
          name="project"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder="Project Details"
                  {...field}
                  className="form-textarea"
                ></Textarea>
              </FormControl>
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="bg-[#0BA8ED] hover:bg-teal-400 mt-[1.5em] max-w-[300px] p-5 text-white"
        >
          {isSubmitting ? "Submitting..." : "Send inquire"}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
