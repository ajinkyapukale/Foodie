import { fireEvent, render , screen } from "@testing-library/react" ;
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appstore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom" ;

it("should render my Header Component with a login button",()=>{
    render(

        <BrowserRouter>
    <Provider store={appStore}> 
    <Header />
    </Provider>
    </BrowserRouter>
    );
    const loginButton = screen.getByRole("button");
    expect(loginButton).toBeInTheDocument();
    })

    it("should change login button to Logout on click" ,()=>{
        render(
    
            <BrowserRouter>
        <Provider store={appStore}> 
        <Header />
        </Provider>
        </BrowserRouter>
        );

        const loginButton = screen.getByRole("button",{name:"Login"});
        fireEvent.click(loginButton);
        const logoutButton = screen.getByRole("button", {name:"Logout"})
        expect(logoutButton).toBeInTheDocument();
        })