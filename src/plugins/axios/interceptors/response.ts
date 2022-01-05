import { Axios } from "axios";
import { useMessage } from "naive-ui";

const message = useMessage()
export default (axiosInstance: Axios): void => {
  // 相应拦截器
  axiosInstance.interceptors.response.use(
    (response) => {
      const { responseType } = response.config;
      // 不拦截blob
      if (responseType === "blob") {
        return response;
      }
      const { success, errMsg } = response.data;
      // 处理失败请求
      if (!success) {
        message.error(errMsg);
        return Promise.reject(errMsg);
      }
      return response.data;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
};
