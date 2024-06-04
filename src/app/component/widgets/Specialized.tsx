"use client";
import Quarter from "../shared/Boxes";
import Wrapper from "../shared/Wrapper";
import Image from "next/image";
import Web3Image from "@/assessts/images/web3.png";
import { useState } from "react";

export const programsData = [
  {
    slug: "wmd",
    header: "Web 3.0 (Blockchain) and Metaverse Specialization",
    description:
      "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
    image: "/assessts/images/web3.png",
    quarters: [
      {
        header: "Quarter IV",
        description:
          "W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps",
        number: 4,
      },
      {
        header: "Quarter V",
        description:
          "MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences",
        number: 5,
      },
    ],
  },
  {
    slug: "ai",
    header: "Artificial Intelligence (AI) and Deep Learning Specialization",
    description:
      "The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.",
    image: "/assessts/images/ai.webp",
    quarters: [
      {
        header: "Quarter IV",
        description:
          "AI-351: Developing Planet-Scale Intelligent APIs and Python Programming",
        number: 4,
      },
      {
        header: "Quarter V",
        description: "AI-361: Deep Learning and MLOps",
        number: 5,
      },
    ],
  },
  {
    slug: "cn",
    header: "Cloud-Native Computing Specialization",
    description:
      "The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.",
    image: "/assessts/images/cloud.webp",
    quarters: [
      {
        header: "Quarter IV",
        description:
          "CN-351: Certified Kubernetes Application Developer (CKAD)",
        number: 4,
      },
      {
        header: "Quarter V",
        description:
          "CN-361: Developing Multi-Cloud Apps using CDK for Terraform",
        number: 5,
      },
    ],
  },
  {
    slug: "ct",
    header: "Ambient Computing and IoT Specialization",
    description:
      "The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices.",
    image: "/assessts/images/ambient.webp",
    quarters: [
      {
        header: "Quarter IV",
        description:
          "AC-351: Ambient Computing with Voice Assistants and Matter Devices",
        number: 4,
      },
      {
        header: "Quarter V",
        description: "AC-361: Embedded Programming using C and Rust",
        number: 5,
      },
    ],
  },
  {
    slug: "bio",
    header: "Genomics and Bioinformatics Specialization",
    description:
      "Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focuses on performing complex bioinformatics analysis using the most essential Python libraries and applications.",
    image: "/assessts/images/genomics.webp",
    quarters: [
      {
        header: "Quarter IV",
        description: "Bio-351: Python for Biologists",
        number: 4,
      },
      {
        header: "Quarter V",
        description: "Bio-361: Bioinformatics with Python",
        number: 5,
      },
    ],
  },
  {
    slug: "as",
    header: "Network Programmability and Automation Specialization",
    description:
      "More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git.",
    image: "/assessts/images/net.webp",
    quarters: [
      {
        header: "Quarter IV",
        description: "NPA-351: CCNA 200-301 Certification",
        number: 4,
      },
      {
        header: "Quarter V",
        description: "NPA-361: Network Programmability and Automation",
        number: 5,
      },
    ],
  },
];

const Specialized = () => {
  const [selectedItem, setSelectedItem] = useState("wmd");
  const selectedItemdata = programsData.find(
    (item) => item.slug === selectedItem
  );

  return (
    <section>
      <Wrapper>
        <div>
          <h2 className="text-5xl font-bold">Specialized Tracks:</h2>
          <p className="mt-5 text-xl text-slate-600 max-w-screen-sm">
            After completing the first three quarters, the participants will
            select one or more specializations consisting of two courses each:
          </p>
        </div>

        <div className="mt-10 flex flex-col-reverse lg:flex-row gap-x-4 gap-y-8">
          {/* content left */}
          <div className="basis-8/12 sticky top-28 self-start shadow-xl rounded-xl border-teal-300 px-8 py-8">
            <h4 className="text-lg text-primary font-bold">
              Specialized Program
            </h4>
            <h3 className="text-2xl font-semibold mt-3">
              {selectedItemdata?.header}
            </h3>
            <p className="text-xl text-slate-600 mt-3">
              {selectedItemdata?.description}
            </p>
            <button className="mt-4 text-teal-700 text-xl font-bold underline flex items-end gap-x-2">
              Learn More
              <svg
                className="mb-1.5"
                width={8}
                height={11}
                viewBox="0 0 8 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.00006 10.0368L6.06801 5.57117L1.09503 0.999994"
                  stroke="#00616C"
                  strokeWidth={2}
                />
              </svg>
            </button>

            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              {selectedItemdata?.quarters.map((item, i) => (
                <Quarter
                  key={item.number}
                  header={item.header}
                  description={item.description}
                  number={item.number}
                  haveBorder={false}
                />
              ))}
            </div>
          </div>
          {/* CONTENT RIGHT */}
          <div className="basis-4/12 px-4 space-y-8 py-6 flex-1 ">
            {programsData.map((item, i) => (
              <div
                onClick={() => setSelectedItem(item.slug)}
                key={item.slug}
                className="flex gap-x-4 items-center cursor-pointer"
              >
                <div className="flex-shrink-0 h-24 w-36">
                  <Image
                    src={item.image}
                    width={160}
                    height={96}
                    alt={item.header}
                    className="object-cover h-24 rounded-md"
                  />
                </div>

                <div>
                  <h4 className="text-primary font-medium">
                    Specialized Program
                  </h4>
                  <h3 className="text-xl font-bold">{item.header}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Specialized;
