import axios from 'axios';
import JsSHA from 'jssha';

const getAuthorizationHeader = () => {
  const AppID = 'b1b3d4ec9f564b33b10ae9bb77105f1c';
  const AppKey = 'e2WHLsZ8IRQmLaCX-YIiXHS2F8I';
  const GMTString = new Date().toGMTString();
  const ShaObj = new JsSHA('SHA-1', 'TEXT');
  ShaObj.setHMACKey(AppKey, 'TEXT');
  ShaObj.update(`x-date: ${GMTString}`);
  const HMAC = ShaObj.getHMAC('B64');
  const Authorization = `hmac username="${AppID}", algorithm="hmac-sha1", headers="x-date", signature="${HMAC}"`;
  return { Authorization, 'X-Date': GMTString };
};

axios.defaults.baseURL = 'https://ptx.transportdata.tw/MOTC/v2/Tourism';
const api = {
  get: (url) => new Promise((resolve, reject) => {
    axios.get(url, {
      headers: getAuthorizationHeader(),
    })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  }),

};

export default api;
