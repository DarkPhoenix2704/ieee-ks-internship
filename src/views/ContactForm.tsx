import { Heading, VStack, Text, FormControl, FormLabel, Input, FormErrorMessage, Flex, Textarea, Button, CheckboxGroup, Checkbox } from "@chakra-ui/react";
import { useForm, Controller, FormProvider, useFormContext } from "react-hook-form";
import { InferType } from 'yup';
import { formValidator } from "../validator";
import axios from 'axios';
import { yupResolver } from '@hookform/resolvers/yup';

import qs from 'qs';

type FormType = InferType<typeof formValidator>;

export const ContactForm = () => {
  const methods = useForm<FormType>({ mode: 'all', resolver: yupResolver(formValidator) });

  const { control, register, handleSubmit, formState: {
    errors
  } } = methods;
  const sendData = async (data: any) => {
console.log(data);
    console.log(qs.stringify(data))
    const res = axios.post("https://mint-forms.ieee-mint.org/api/form/addresponse?formld-task", qs.stringify(data), {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
    }).then((re) => {
      console.log(re.data)
    })
  };
  return (
    <VStack width={{
      base: '100vw',
      md: '50vw'
    }}>
      <Heading>
        Let's level up your brand together
      </Heading>
      <Text textColor="blackAlpha.700">
        Your can reach us any time at untitledui@gmail.com
      </Text>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(sendData)} >
          <FormControl width="350px">
            <FormLabel htmlFor='name'>Name</FormLabel>
            <Input
              backgroundColor="white"
              isRequired
              border="2px solid rgba(0,0,0,0.95)"
              id='name'
              placeholder='Name'
              {...register('name')}
            />
            <FormErrorMessage>
              {errors.name && errors.name.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl
            width="350px"
          >
            <FormLabel htmlFor='email'>Email</FormLabel>
            <Input
              isRequired
              backgroundColor="white"
              border="2px solid rgba(0,0,0,0.95)"
              id='email'
              placeholder='Email'
              {...register('email')}
            />
            <FormErrorMessage>
              {errors.email && errors.email.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl width="350px">
            <FormLabel htmlFor='phone'>Phone</FormLabel>
            <Input
              isRequired
              backgroundColor="white"
              border="2px solid rgba(0,0,0,0.95)"
              id='phone'
              placeholder='phone'
              {...register('phone')}
            />
            <FormErrorMessage>
              {errors.phone && errors.phone.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl
            width="350px">
            <FormLabel htmlFor='description'>Description</FormLabel>
            <Textarea

              backgroundColor="white"
              border="2px solid rgba(0,0,0,0.95)"
              id='description'
              placeholder='description'
              {...register('description')}
            />
            <FormErrorMessage>
              {errors.description && errors.description.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl>
            <Controller
              name="services"
              control={control}
              render={({ field: { ref, ...rest } }) => (
                <CheckboxGroup {...rest}>
                  <Flex marginBlock="10px" flexWrap="wrap" columnGap="10px" rowGap="10px">
                    <Checkbox value="Website Design">Website Design</Checkbox>
                    <Checkbox value="Content Creation">Content Creation</Checkbox>
                    <Checkbox value="UX Design">UX Design</Checkbox>
                    <Checkbox value="Strategy & Consulting">Strategy & Consulting</Checkbox>
                    <Checkbox value="UX Research">UX Research</Checkbox>
                    <Checkbox value="Other">Other</Checkbox>
                  </Flex>
                </CheckboxGroup>
              )}
            />
          </FormControl>
          <Button textColor="white" background="#4A5364" marginTop="10px" width="350px" type="submit" >
            Send Message
          </Button>
        </form>
      </FormProvider>

    </VStack >
  );
};