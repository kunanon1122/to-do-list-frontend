import React, { FC } from "react";
import Image from "next/image";

import Title from "@/components/Title";
import LanguageButton from "@/components/Button/LanguageButton";

const TopNavigation: FC = () => {
  return (
    <div className="h-14 w-full flex items-center px-3 justify-between">
      <div className="flex items-center">
        <Image
          src="/imgs/to-do-list-icon.png"
          alt="Not Found"
          height={30}
          width={30}
        />
        <Title level={3} ml>
          To-do List
        </Title>
      </div>
      <div>
        <LanguageButton />
      </div>
    </div>
  );
};

export default TopNavigation;
