import { Heading, VStack, Text, FormControl, FormLabel, Input, FormErrorMessage, Textarea, Button } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { InferType } from 'yup';
import { formValidator } from "../validator";
import axios from 'axios';
import qs from 'qs';

type FormType = InferType<typeof formValidator>;

export const ContactForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<FormType>();
  const sendData = async (data) => {
    const res = axios.postForm("https://mint-forms.ieee-mint.org/api/form/addresponse?formld-task", qs.stringify(data), {
      headers: {
        "Content-Type": "x-www-form-urlencoded"
      }
    }).then((re) => {
      console.log(re)
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
      <form onSubmit={handleSubmit(sendData)} >
        <FormControl>
          <FormLabel htmlFor='name'>Name</FormLabel>
          <Input
            id='name'
            placeholder='Name'
            {...register('name')}
          />
          <FormErrorMessage>
            {errors.name && errors.name.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor='email'>Email</FormLabel>
          <Input
            id='email'
            placeholder='Email'
            {...register('email')}
          />
          <FormErrorMessage>
            {errors.email && errors.email.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor='phone'>Phone</FormLabel>
          <Input
            id='phone'
            placeholder='phone'
            {...register('phone')}
          />
          <FormErrorMessage>
            {errors.phone && errors.phone.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor='description'>Description</FormLabel>
          <Textarea
            id='description'
            placeholder='description'
            {...register('description')}
          />
          <FormErrorMessage>
            {errors.description && errors.description.message}
          </FormErrorMessage>
        </FormControl>
        <Button type="submit" >
          Send Message
        </Button>
      </form>

    </VStack>
  );
};