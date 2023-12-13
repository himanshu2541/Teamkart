import React from "react";
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Preloader from "./components/Preloader.jsx";
import NoPage from "./page/NoPage.jsx";

const LazyAbout = React.lazy(() => import('./page/About.jsx'))
const LazyTeam = React.lazy(() => import('./page/Team.jsx'))
const LazyHome = React.lazy(() => import('./page/Home.jsx'))
const LazyCar = React.lazy(() => import('./page/Cars.jsx'))
const LazySponsor = React.lazy(() => import('./page/Sponsors.jsx'))
const LazyNewsLetter = React.lazy(() => import('./page/Newsletter.jsx'))
const LazyLayout = React.lazy(() => import('./page/Layout.jsx'))
const LazySponsPDF = React.lazy(() => import('./page/SponsPDF.jsx'))

function App() {

    return (<>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={
                        <React.Suspense fallback={<Preloader />}>
                            <LazyLayout />
                        </React.Suspense>
                    }>
                        <Route index element={<React.Suspense fallback={<Preloader/>}>
                            <LazyHome/>
                        </React.Suspense>}/>
                        <Route path={'/about'} element={<React.Suspense fallback={<Preloader/>}>
                            <LazyAbout/>
                        </React.Suspense>}/>
                        <Route path={'/team'} element={<React.Suspense fallback={<Preloader/>}>
                            <LazyTeam/>
                        </React.Suspense>}/>
                        <Route path={'/cars'} element={<React.Suspense fallback={<Preloader/>}>
                            <LazyCar/>
                        </React.Suspense>}/>
                        <Route path={'/sponsors'} element={<React.Suspense fallback={<Preloader/>}>
                            <LazySponsor/>
                        </React.Suspense>}/>
                        <Route path={'/newsletter'} element={<React.Suspense fallback={<Preloader/>}>
                            <LazyNewsLetter/>
                        </React.Suspense>}/>
                    </Route>
                    <Route path={'/sponsors/sponsors-pdf'} element={<React.Suspense fallback={<Preloader />}>
                        <LazySponsPDF />
                    </React.Suspense> } />
                    <Route path={"*"} element={<NoPage />}/>

                </Routes>
            </BrowserRouter>
        </>)
}

export default App
