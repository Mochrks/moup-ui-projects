
import { Button } from '@/components/ui-neobrutalism/button'
import { MdArrowOutward } from "react-icons/md";
import { Navbar } from '@/components/ui-main/Navbar';
import { Footer } from '@/components/ui-main/Footer';
import CodePreview from '@/components/ui-main/CodePriview';
import ScrollToTopButton from '@/components/ui-main/ScrollToTopButton';
import { BorderButton, GlowButton, JellyButton, MorphButton, PulseButton, sampleCodeButtonHome } from '@/code/home';
import CircularText from '@/components/ui-main/CircularText';
import FlowingMenu from '@/components/ui-main/FlowingMenu';
import { useSmoothNavigate } from '@/hooks/useSmoothNavigate';

const demoItems = [
    { link: 'docs/introduction', text: 'DOCS', image: 'https://img.freepik.com/free-psd/3d-rendering-graphic-design_23-2149667482.jpg?semt=ais_hybrid' },
    { link: 'components/all-components', text: 'All Components', image: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/aa8625109287767.5fd08439c7676.jpg' },
    { link: 'colors', text: 'Colors', image: 'https://img.freepik.com/free-psd/3d-rendering-graphic-design_23-2149642698.jpg' },
    { link: 'docs/templates', text: 'Templates', image: 'https://img.freepik.com/free-psd/3d-rendering-search-engine-background_23-2150562441.jpg' }
];

const SampleComponent = () => {
    return (
        <div className=" bg-gray-100 flex flex-col md:flex-row items-center justify-center md:space-x-8 space-y-8 md:space-y-0 p-4">
            <PulseButton>Pulse Button</PulseButton>
            <BorderButton>Border Button</BorderButton>
            <JellyButton>Jelly Button</JellyButton>
            <GlowButton>Glow Button</GlowButton>
            <MorphButton>Morph Button</MorphButton>
        </div>
    )
}
const Home = () => {
    const { smoothNavigate } = useSmoothNavigate();

    const handleReadDocs = () => {
        smoothNavigate('/docs/introduction');
    };

    return (
        <div className='overflow-x-hidden overflow-y-auto' >
            <div className='hidden lg:block absolute top-[10rem] left-5 z-10 max-w-[200px]'>
                <CircularText
                    text="MOUP*UI*COMPONENTS*"
                    onHover="speedUp"
                    spinDuration={20}
                    className="custom-class"
                />
            </div>
            <div className="flex flex-col min-h-screen" >
                <header>
                    <Navbar />
                </header>
                {/* main content */}
                <main className="flex-grow pt-20">
                    <div className='flex flex-col items-center justify-center space-y-10 py-10 md:py-[9rem]'>
                        <div className='flex flex-col text-start md:text-center space-y-5 md:space-y-10'>
                            <h1 className="max-w-5xl scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl pt-20 md:pt-1 2xl:pt-6 px-5">
                                Elevate Your Apps with <span className="text-primary">MoupUI</span> – Stunning Animated UI Components
                            </h1>
                            <p className="max-w-5xl text-xl leading-7 [&:not(:first-child)]:mt-3 px-5">
                                Transform your React applications with <span className="font-semibold">MoupUI</span>, the ultimate UI component library for creating captivating animations. Seamlessly integrated with Tailwind CSS, ShadCN UI, and Framer Motion, <span className="font-semibold">MoupUI</span> makes it effortless to bring your designs to life. Simply copy, paste, and watch your app shine!
                            </p>
                        </div>

                        {/* Updated Button dengan smooth navigate */}
                        <Button
                            className='px-5 py-6 text-xl cursor-pointer'
                            onClick={handleReadDocs}
                        >
                            Read the docs
                            <MdArrowOutward className='m-2 w-5 h-5' />
                        </Button>

                        <div className='flex items-center justify-center w-full max-w-6xl px-5 pt-20'>
                            <CodePreview
                                title="Button"
                                code={sampleCodeButtonHome}
                                language="javascript"
                                nameFile='Button.tsx'
                                preview={<SampleComponent />}
                            />
                        </div>
                    </div>
                </main>

                <div className='mt-20'>
                    <div style={{ height: '600px', position: 'relative' }}>
                        <FlowingMenu
                            items={demoItems}
                        />
                    </div>
                    <Footer />
                </div>
            </div>
            <ScrollToTopButton />
        </div>
    )
}

export default Home;