import Layout from "../../components/layout";
import Container from "../../components/container";
import Header from "../../components/header";
import Head from "next/head";
import { CMS_NAME } from "../../lib/constants";
import { FaPersonWalking, FaCube, FaChartLine } from "react-icons/fa6";
import { IconContext } from "react-icons";

export default function About() {
  return (
    <>
      <Layout>
        <Head>
          <title>{CMS_NAME}</title>
        </Head>
        <Container>
          <Header />

          <section className="body-font">
            <div className="lg:w-4/6 mx-auto">
              <div className="flex flex-col sm:flex-row mt-10">
                <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                  <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 ">
                    <IconContext.Provider value={{ size: "2em" }}>
                      <FaPersonWalking />
                    </IconContext.Provider>
                  </div>
                  <div className="flex flex-col items-center text-center justify-center">
                    <h2 className="font-medium title-font mt-4  text-lg">
                      Who are you ...?
                    </h2>
                    <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                  </div>
                </div>
                <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                  <p className="leading-relaxed text-lg mb-4">
                    <strong>Name:</strong>松田　遥
                    <br />
                    <strong>address:</strong>埼玉県
                    <br />
                    <strong>birthday:</strong>1996年4月22日
                    <br />
                    <br />
                    <strong>job:</strong>ソフトバンクの販売社員
                    <br />
                    <br />
                    <strong>hobby:</strong>LOL,Netflix
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="body-font">
            <div className="lg:w-4/6 mx-auto">
              <div className="flex flex-col sm:flex-row mt-10">
                <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                  <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 ">
                    <IconContext.Provider value={{ size: "2em" }}>
                      <FaCube />
                    </IconContext.Provider>
                  </div>
                  <div className="flex flex-col items-center text-center justify-center">
                    <h2 className="font-medium title-font mt-4 text-lg">
                      Skill（勉強中）
                    </h2>
                    <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                  </div>
                </div>
                <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                  <p className="leading-relaxed text-lg mb-4">
                    <strong>Backend :</strong> MySQL, Java
                    <br />
                    <strong>Frontend :</strong> HTML, CSS, JavaScrip, Next.js
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="body-font">
            <div className="lg:w-4/6 mx-auto">
              <div className="flex flex-col sm:flex-row mt-10">
                <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                  <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 ">
                    <IconContext.Provider value={{ size: "2em" }}>
                      <FaChartLine />
                    </IconContext.Provider>
                  </div>
                  <div className="flex flex-col items-center text-center justify-center">
                    <h2 className="font-medium title-font mt-4 text-lg">
                      Discography
                    </h2>
                    <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                  </div>
                </div>
                <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                  <h2 className="font-medium title-font mt-4 text-base">
                    2024 ~ now
                  </h2>
                  <p className="mb-4 mt-1">ソフトバンクにて販売業務</p>
                  <h2 className="font-medium title-font mt-4 text-base">
                    2021 ~ 2024
                  </h2>
                  <p className="mb-4 mt-1">サントリーにてコールセンター業務</p>
                  <h2 className="font-medium title-font mt-4 text-base">
                    2019 ~ 2021
                  </h2>
                  <p className="mb-4 mt-1">工学院大学工学研究化応用学専攻</p>
                  <h2 className="font-medium title-font mt-4 text-base">
                    2015 ~ 2019
                  </h2>
                  <p className="mb-4 mt-1">工学院大学先進工学部生命化学科</p>
                  <p className="leading-relaxed text-lg mb-4"></p>
                </div>
              </div>
            </div>
          </section>
        </Container>
      </Layout>
    </>
  );
}
