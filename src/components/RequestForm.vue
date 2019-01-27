<template>
  <el-card class="box-card">
    <el-form
      :model="requestForm"
      :rules="requestFormRules"
      ref="requestForm"
      label-width="80px"
      class="demo-ruleForm"
    >
      <el-form-item label="Symbols" prop="symbols">
        <el-select v-model="requestForm.symbols" multiple filterable placeholder="Select">
          <el-option v-for="symbol in symbolsList" :key="symbol" :label="symbol" :value="symbol"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Interval" prop="intervals">
        <el-checkbox-group v-model="requestForm.intervals">
          <el-checkbox label="1h" name="interval"></el-checkbox>
          <el-checkbox label="30m" name="interval"></el-checkbox>
          <el-checkbox label="15m" name="interval"></el-checkbox>
          <el-checkbox label="5m" name="interval"></el-checkbox>
          <el-checkbox label="1m" name="interval"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="Email" prop="email">
        <el-input type="email" placeholder="Your email" v-model="requestForm.email"></el-input>
      </el-form-item>
      <el-form-item label="Parse range">
        <el-col :span="11">
          <el-date-picker
            type="date"
            placeholder="Pick a start date"
            v-model="requestForm.startDate"
            style="width: 100%;"
          ></el-date-picker>
        </el-col>
        <el-col :span="2">&nbsp;</el-col>
        <el-col :span="11">
          <el-date-picker
            type="date"
            placeholder="Pick an end date"
            v-model="requestForm.endDate"
            style="width: 100%;"
          ></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="createRequest('requestForm')">Create parse request</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
import { getSymbols, createParseRequest } from "../lib/api.js";
export default {
  data() {
    return {
      symbols: [],
      symbolsList: [],
      requestForm: {
        symbols: [],
        intervals: [],
        email: "",
        startDate: null,
        endDate: null
      },
      requestFormRules: {
        symbols: [
          { required: true, message: "Please set symbols", trigger: "blur" }
        ],
        intervals: [
          {
            required: true,
            message: "You need to choose interval",
            trigger: "blur"
          }
        ],
        email: [
          {
            required: true,
            message: "Please input email address",
            trigger: "blur"
          },
          {
            type: "email",
            message: "Please input correct email address",
            trigger: ["blur", "change"]
          }
        ]
      }
    };
  },
  methods: {
    createRequest(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          createParseRequest(this.requestForm).then(() => {
            this.$notify({
              title: "Success",
              message: "Parse request created, email with results will be sent to your email",
              type: "success"
            });
          }, err => {
            const { status } = err.response;
            if (status === 403) {
              this.$notify({
              title: "Error",
              message: "Your email is forbidden, please contact us",
              type: "error"
            });
            }
          });
        } else {
          return false;
        }
      });
      //
    }
  },
  mounted() {
    getSymbols().then(e => {
      this.symbolsList = [...e];
    });
  }
};
</script>

<style scoped>
.line {
  display: flex;
  justify-content: center;
}
</style>
