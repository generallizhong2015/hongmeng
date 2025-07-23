import http from "@ohos:net.http";
export class HttpUtil {
    private static instance: HttpUtil;
    private httpRequest: http.HttpRequest;
    private constructor() {
        this.httpRequest = http.createHttp();
    }
    public static getInstance(): HttpUtil {
        if (!HttpUtil.instance) {
            HttpUtil.instance = new HttpUtil();
        }
        return HttpUtil.instance;
    }
    /**
     * 通用请求方法
     * @param url 请求地址
     * @param method 请求方法(GET/POST等)
     * @param params 请求参数(可选)
     * @param headers 请求头(可选)
     */
    public request(url: string, method: http.RequestMethod, params?: Record<string, string>, headers?: Record<string, string>): Promise<string> {
        return new Promise((resolve, reject) => {
            this.httpRequest.request(url, {
                method: method,
                extraData: params ? JSON.stringify(params) : undefined,
                header: headers || { 'Content-Type': 'application/json' } as Record<string, string>
            }, (err, data) => {
                if (err) {
                    reject(`请求失败: ${err.code} - ${err.message}`);
                    return;
                }
                if (data.responseCode === 200) {
                    try {
                        // 如果是字符串则尝试解析并转回字符串以统一输出格式
                        let result: string;
                        if (typeof data.result === 'string') {
                            result = JSON.stringify(JSON.parse(data.result));
                        }
                        else {
                            result = JSON.stringify(data.result); // 对象或ArrayBuffer转为字符串
                        }
                        resolve(result);
                    }
                    catch (e) {
                        // 非JSON数据直接返回原始字符串
                        resolve(data.result.toString());
                    }
                }
                else {
                    reject(`服务器错误: ${data.responseCode}`);
                }
            });
        });
    }
    // GET快捷方法
    public static get(url: string, params?: Record<string, string>): Promise<string> {
        return HttpUtil.getInstance().request(url, http.RequestMethod.GET, params);
    }
    // POST快捷方法
    public static post(url: string, params: Record<string, string>): Promise<string> {
        return HttpUtil.getInstance().request(url, http.RequestMethod.POST, params);
    }
}
