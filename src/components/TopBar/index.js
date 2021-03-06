import { useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

export default function TopBar() {

    let navigate = useNavigate();
    const { pathname } = useLocation();
    const isHomePage = pathname === '/';

    return (
        <>

            <Topbar className="flex-center">
                {!isHomePage && (
                    <button className="pointer" onClick={() => navigate(-1)}>
                        <ion-icon name="arrow-back"></ion-icon>
                    </button>
                )}

                <h1>CINEFLEX</h1>
            </Topbar>

        </>
    )
}

const Topbar = styled.div`

    width: 100%;
    height: 67px;

    background-color: #C3CFD9;

    position: fixed;
    top: 0;
    left: 0;

    h1 {
        
        font-size: 34px;
        font-style: normal;
        font-weight: 400;
        line-height: 40px;
        letter-spacing: 0em;
        color: #E8833A;
        
    }

    button {
        position: absolute;
        left: 10px;
        
        width: 30px;
        height: 30px;

        background: none;
    }

    button ion-icon {
        width: 25px;
        height: 25px;
    }
`