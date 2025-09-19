import type { BaseQuestion } from "../../utils/types/baseTypes";

type OptionProp = {
    label: 'a' | 'b' | 'c' | 'd' | 'e';
    value: string;
}

type QuestionProps = BaseQuestion & {
    selected: string;
    setSelected: (value: string) => void;
}

const Option: React.FC<Pick<QuestionProps, 'setSelected' | 'selected'> & OptionProp> = ({ label, value, setSelected, selected }) => {
    return (
        <div className='flex items-start gap-2 group' onClick={() => setSelected(label)}>
            <div className={`w-5 h-5 bg-gray-3/30 text-blue-5 ${selected === label && 'bg-green-3 text-white'} rounded-full text-[10px] flex items-center justify-center uppercase font-semibold group-hover:bg-green-3 group-hover:text-white shrink-0`}>{label}</div>
            <p className='text-[15px] leading-[21px]'>{value}</p>
        </div>
    )
}

const Question = ({ questionObject }: { questionObject: QuestionProps }) => {
    const { question, options, index, selected, setSelected } = questionObject

    return (
      <div className={`flex items-start gap-6`}>
        <div className="bg-gray-3 text-blue-5 w-[22px] h-[22px] md:w-[30px] md:h-[30px] mlg:w-[22px] mlg:h-[22px] lgd:w-[30px] lgd:h-[30px] rounded-full text-center flex justify-center items-center text-base md:text-[18px] mlg:text-base lgd:text-[18px] font-semibold shrink-0">
          {index}
        </div>
        <div>
          <p className="font-semibold text-base md:text-[18px] mlg:text-base lgd:text-[18px] text-blue-5 mb-2">
            {question}
          </p>
          <div className="flex gap-3 flex-col">
            {Object.entries(options).map(([option, value]) => (
              <Option
                key={option}
                label={option.toUpperCase() as "a" | "b" | "c" | "d" | "e"}
                value={value}
                setSelected={setSelected}
                selected={selected}
              />
            ))}
          </div>
        </div>
      </div>
    );
}

export default Question