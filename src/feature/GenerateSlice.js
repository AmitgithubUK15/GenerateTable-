import {createSlice} from '@reduxjs/toolkit';

const initialState ={
    val:""
}

export const Tableslice = createSlice({
    name:"Tableslice",
    initialState,
    reducers:{
        Generate: (state,action)=>{
          const number = {
            num:action.payload,
            table: function(){ 
                    let tablearr = [];
                    for(let i =1; i<=10; i++){
                        tablearr.push(`${this.num} x ${i} = ${this.num*i}`)
                    }
                    return tablearr;
                
            }
          }
          state.val = number.table();
        }
    }
})

export const {Generate} = Tableslice.actions;
export default Tableslice.reducer;