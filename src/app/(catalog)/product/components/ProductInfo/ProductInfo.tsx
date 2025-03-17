import HeartIcon from "@/components/icons/HeartIcon";
import ShareIcon from "@/components/icons/ShareIcon";
import { Button } from "@/components/UI/Button";
import { Chip } from "@/components/UI/Chip";
import {
  RadioButtonsGroup,
  RadioGroupButton,
} from "@/components/UI/RadioButtons";
import {
  RadioColorsGroup,
  RadioGroupColor,
} from "@/features/Products/components/RadioColors";
import { Separator } from "@/components/UI/Separator";

const ProductInfo = () => {
  return (
    <div className="flex flex-col gap-2 justify-between flex-1 basis-[49%]">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-6">
          <div className="flex justify-between gap-4">
            <h2 className="text-h4">
              Платье трикотажное <br /> с отделкой из сетки и принтом /
            </h2>
            <button>
              <ShareIcon />
            </button>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="text-h5 text-gray-middle line-through">
                85 000 T
              </span>
              <span className="text-h4">25 000 T</span>
              <Chip size="small" variant="pink">
                -70%
              </Chip>
            </div>

            <div className="text-gray-middle text-description">
              Включая налоги, без стоимости доставки
            </div>
          </div>
        </div>
        <Separator />
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <span className="text-body1">Цвет</span>
            <Separator className="h-4" orientation="vertical" />
            <span className="text-description text-gray-middle">Черный</span>
          </div>
          <RadioColorsGroup className="flex gap-2" defaultValue="default">
            <RadioGroupColor value="small" color="#111111 " id="r1" />
            <RadioGroupColor value="b" color="#111111 " id="r1" />
            <RadioGroupColor value="a" color="#111111 " id="r1" />
          </RadioColorsGroup>
        </div>
        <Separator />
        <div className="flex flex-col gap-4">
          <div className="w-full flex justify-between">
            <span className="text-body1">Размер</span>
            <button className="text-button-xs">Таблица размеров</button>
          </div>
          <RadioButtonsGroup className="flex gap-2" defaultValue="default">
            <RadioGroupButton value="small" id="r1">
              S
            </RadioGroupButton>
            <RadioGroupButton value="medium" id="r2">
              M
            </RadioGroupButton>
            <RadioGroupButton value="large" id="r3">
              L
            </RadioGroupButton>
            <RadioGroupButton value="extraLarge" id="r4">
              XL
            </RadioGroupButton>
          </RadioButtonsGroup>
        </div>
      </div>
      <div className="flex gap-2">
        <Button className="w-full"> Добавить в корзину</Button>
        <Button className="w-full" variant="secondary">
          Купить
        </Button>
        <Button className="[&_svg]:fill-transparent" size="iconNormal">
          <HeartIcon className="stroke-white" />
        </Button>
      </div>
    </div>
  );
};

export default ProductInfo;
