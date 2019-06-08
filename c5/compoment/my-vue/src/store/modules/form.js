const form = {
    state:{
        formData: {},
       },
    mutations:{
        // updateFormData(state, playload){
        //     state.formData = playload
        //     } 
        // },
        updateFormData: (state, payload) => {
          state.formData = payload
        },
    },
    getters:{
        isMostFavour(state){
         return state.formData.favour ==='第二章' ? true : false
        }
       },
    actions:{
        postFormData(context, payload){
            // axios.post('www.api.yourdomain', {'form': '表单数据'}).then((response)=>{
            // if (response.status===200) {}})
            
            context.commit('updateFormData', payload)
    }
}
}
export default form