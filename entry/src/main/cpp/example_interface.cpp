#include <napi/native_api.h>
#include <string>

// 手动声明 libexample.so 中的函数
extern "C" const char* CTEST();

// 封装CTEST方法（返回字符串）
napi_value CallCTEST(napi_env env, napi_callback_info info) {
    // 调用SO中的CTEST函数
    const char* result = CTEST();  // 假设CTEST返回const char*

    // 增加空指针检查
    if (result == nullptr) {
        napi_value jsResult;
        napi_get_undefined(env, &jsResult);
        return jsResult;
    }

    // 将C字符串转为ArkTS的string
    napi_value jsResult;
    napi_create_string_utf8(env, result, NAPI_AUTO_LENGTH, &jsResult);

    return jsResult;
}

// 注册模块导出函数
napi_value RegisterModule(napi_env env, napi_value exports) {
    napi_status status;

    // 示例函数绑定
    napi_value fnCallCTEST;
    status = napi_create_function(env, nullptr, 0, CallCTEST, nullptr, &fnCallCTEST);
    if (status != napi_ok) {
        napi_value err;
        napi_get_undefined(env, &err);
        return err;
    }

    status = napi_set_named_property(env, exports, "callCTEST", fnCallCTEST);
    if (status != napi_ok) {
        napi_value err;
        napi_get_undefined(env, &err);
        return err;
    }

    return exports;
}

// 定义模块
EXTERN_C_START
static napi_module example_module = {
    .nm_version = 1,
    .nm_flags = 0,
    .nm_filename = nullptr,
    .nm_register_func = RegisterModule,  // 修改为自定义注册函数
    .nm_modname = "example",
    .nm_priv = nullptr,
};
EXTERN_C_END

// 模块加载钩子
extern "C" __attribute__((constructor)) void RegisterExampleModule() {
    napi_module_register(&example_module);
}
