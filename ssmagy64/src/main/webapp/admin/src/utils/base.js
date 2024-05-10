const base = {
    get() {
                return {
            url : "http://localhost:8080/ssmagy64/",
            name: "ssmagy64",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssmagy64/front/index.html'
        };
            },
    getProjectName(){
        return {
            projectName: "商品展示小程序"
        } 
    }
}
export default base
