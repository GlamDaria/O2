<template>
  <div class="registration main-container">
    <h1>Регистрация</h1>
    <a-form-model
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      v-bind="layout"
    >
      <a-form-model-item has-feedback label="Email" prop="email">
        <a-input v-model="ruleForm.email" type="email" autocomplete="off" />
      </a-form-model-item>

      <a-form-model-item has-feedback label="Пароль" prop="pass">
        <a-input v-model="ruleForm.pass" type="password" autocomplete="off" />
      </a-form-model-item>

      <a-form-model-item has-feedback label="Повторите пароль" prop="checkPass">
        <a-input
          v-model="ruleForm.checkPass"
          type="password"
          autocomplete="off"
        />
      </a-form-model-item>
      <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
        <a-button type="primary" @click="submitForm('ruleForm')">
          Зарегестрироваться
        </a-button>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>
<script>
export default {
  name: "RegistrationForm",
  data() {
    let checkEmail = (rule, value, callback) => {
      const pattern = /.+@.+\..+/;
      console.log("validate email", !pattern.test(value));
      if (value === "") {
        callback(new Error("Введите email"));
      } else if (!pattern.test(value)) {
        callback(new Error("Введите корректный email"));
      } else {
        callback();
      }
      // return pattern.test(String(value).toLowerCase());
      // if (!pattern.test(value)) {
      // }
    };
    let validatePass = (rule, value, callback) => {
      console.log("validate pass");
      if (value === "") {
        callback(new Error("Введите пароль"));
      } else if (value.length < 8) {
        callback(new Error("Пароль должен быть не менее 8 символов"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    let validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Повторите пароль"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("Пароли не совпадают!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        pass: "",
        checkPass: "",
        email: ""
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "change" }],
        checkPass: [{ validator: validatePass2, trigger: "change" }],
        email: [{ validator: checkEmail, trigger: "change" }]
      },
      layout: {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 }
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // alert("submit!");
          // this.$store.commit("setLoading", true);
          this.$store.dispatch("createUser", this.ruleForm);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
