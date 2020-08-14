import React from "react";
import PropTypes from "prop-types";

const ThemeContext = React.createContext();

export class Provider extends React.Component{
    static propTypes = {
        store: PropTypes.object.isRequired//store是一个对象，且为必传属性
    };
    render() {
        return <ThemeContext className="Provider" value={{
            store: this.props.store
        }}>
            {this.props.children}
        </ThemeContext>;
    }
}
export function connect(mapStateToProps, mapDispatchToProps){
    if(typeof mapDispatchToProps !=="function"){
        mapStateToProps = function (){
            return {};
        };
    }
    if(typeof mapDispatchToProps!=="function"){
        if(mapDispatchToProps!==null&&typeof mapDispatchToProps==="object"){
            //如果不是个函数而是个非空对象，则将格式转换为相应的格式
            const actions = mapDispatchToProps;
            mapDispatchToProps = function(dispatch){
                const obj = {};
                for(let key in actions){
                    if(!actions.hasOwnProperty(key)) break;
                    obj[key] =function(...args){
                        dispatch(actions[key](...args));
                    };
                }
                return obj;
            };
        } else {
            mapDispatchToProps = function (){
                return {};
            };
        }
    }
    return function connectHOC(Component){
        //Component组件
        //得保证返回得是个组件才能被调用
        return class Proxy extends React.Component{
            //拿到上下文中的信息
            static contextType = ThemeContext;
            render() {
                return <Component {...this.queryProps()}/>;
            }
            queryProps = () => {
                const store = this.context.store;
                const state = mapDispatchToProps(store.getState());
                const action = mapDispatchToProps(store.dispatch);
                return{
                    ...state,
                    ...action
                };
            }
            componentDidMount() {
                this.context.store.subscribe(()=>{
                    this.forceUpdate();
                });
            }
        }
    }
}