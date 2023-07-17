<template>

    <a-form
    action="https://formsubmit.co/molinamartinmarcos@gmail.com" method="POST"
    class="form"
    :validate-messages="validateMessages"
    >
    <h1>Contact me and I will respond to you right away.:</h1>
    <a-form-item
      :name="['user', 'name']"
      label="Name"
      form="name"
      :rules="[{ required: false }]"
    >
      <a-input type="text" name="name" />
    </a-form-item>
    <a-form-item
      :name="['user', 'email']"
      label="Email"
      :rules="[{ type: 'email' }]"
      from="email"
    >
      <a-input type="email" name="email"/>
    </a-form-item>
    <a-form-item form="message" :name="['user', 'introduction']" label="Message">
      <a-textarea type="text" name="message"/>
    </a-form-item>
    <a-form-item :wrapper-col="{ ...layout.wrapperCol, offset: 8 }">
      <a-button type="primary" html-type="submit">Submit</a-button>
    </a-form-item>
  </a-form>
</template>
<script setup>
import { reactive } from "vue";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

</script>

<style scoped lang="scss">

.form{
    // width: 100%;
    box-shadow: 3px 3px 3px 3px black inset;
    padding: 35px;
    margin: 5rem;
    margin-top: 10rem;
    background-color: aliceblue;
    h1{
        text-align: center;
        text-decoration: underline;
    }
}
</style>
