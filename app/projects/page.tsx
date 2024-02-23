"use client"
// import Image from "next/image";
import { Button, Card, CardHeader, CardBody, Image } from "@nextui-org/react";
function navButton(child: string) {
  return <Button className="bg-[#E7ECEC] shadow-md" size="sm" radius="full">{child}</Button>
}
function navBar() {
  return <div className="flex bg-[#E9E1EC] justify-between">
      <Image
            src="/assets/AISociety_Logo_Dark.png"
            width="150"
            height="150"
            alt="AIS Logo"
          />
      <div className="flex space-x-2 items-center mr-4">
          {navButton("Home")}
          {navButton("Events")}
          <Button className="bg-[#E2CFF4] shadow-md" size="sm" radius="full">Projects</Button>
          {navButton("Team")}
          {navButton("Publications")}
          {navButton("Blog")}
      </div>
  </div>
}

function projectCard(title: string, description: string, image: string, author: string) {
    return (
        <Card className="py-4 mr-2">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">{title}</p>
        <small className="text-default-500">{description}</small>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={image}
          height={50}
          width={270}
        />
      </CardBody>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <small className="text-default-500">{author}</small>
      </CardHeader>
    </Card>
    );
}

function categoryButton(child: string) {
    return (
      <Button
        className="bg-[#E2CFF4] shadow-md text-left w-1/8 h-16 m-2"
        size="lg"
        radius="sm"
        startContent={<Image className="m-0 p-0" src="/assets/download 1.png" width={40} height={40} alt="arrow" />}
      >
        {child}
      </Button>
    );
  }

export default function Home() {
  return (
    <div >
          <div>
            {navBar()}
          </div>
          <div className="p-8 bg-white">
            <div className="text-[#636363] bg-white ml-2">
                Project Categories
            </div>
            <div className="flex m-0">
                <div className="">
                    {categoryButton("Generation")}
                    {categoryButton("Clustering")}
                </div>
                <div className="">
                    {categoryButton("Language")}
                    {categoryButton("Detection")}
                </div>
                <div className="">
                    {categoryButton("Audio")}
                    {categoryButton("Vision")}
                </div>
                <div className="">
                    {categoryButton("Recommendors")}
                    {categoryButton("Classification")}
                </div>
                <div className="">
                    {categoryButton("Navigation")}
                    {categoryButton("All Projects")}
                </div>

            </div>
          </div>
          <div className="p-8 bg-[#F2F2F2] h-dvh">
            <div className="text-[#636363] bg-[#F2F2F2]">
                    Projects
                </div>
                <div className="flex justify-between mt-2">
                    {projectCard("Project 1", "Project Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae sodales leo, at sagittis lectus. Pellentesque hendrerit eget urna non.", "/assets/project_placeholder.png", "Author 1")}
                    {projectCard("Project 2", "Project Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae sodales leo, at sagittis lectus. Pellentesque hendrerit eget urna non.", "/assets/project_placeholder.png", "Author 2")}
                    {projectCard("Project 3", "Project Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae sodales leo, at sagittis lectus. Pellentesque hendrerit eget urna non.", "/assets/project_placeholder.png", "Author 3")}
                    {projectCard("Project 4", "Project Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae sodales leo, at sagittis lectus. Pellentesque hendrerit eget urna non.", "/assets/project_placeholder.png", "Author 4")}
                </div>
          </div>
    </div>
  );
}
