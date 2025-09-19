import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import BentoBox from "./BentoBox";
import noData from "../../../assets/images/empty-table.png";

// import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Copy } from "lucide-react";

const englishTopics = [
  {
    sn: "001",
    topic: "Comprehension - Main and Supporting Ideas",
    score: "12%",
    status: "Ongoing",
  },
  {
    sn: "002",
    topic: "Grammar - Parts of Speech",
    score: "15%",
    status: "Ongoing",
  },
  {
    sn: "003",
    topic: "Writing - Formal and Informal Letters",
    score: "16%",
    status: "Ongoing",
  },
  {
    sn: "004",
    topic: "Literature - Figures of Speech",
    score: "20%",
    status: "Ongoing",
  },
];

// const mathematicsTopics = [
//   {
//     sn: "001",
//     topic: "Comprehension - Main and Supporting Ideas",
//     score: "12%",
//     status: "Ongoing",
//   },
//   {
//     sn: "002",
//     topic: "Grammar - Parts of Speech",
//     score: "15%",
//     status: "Ongoing",
//   },
//   {
//     sn: "003",
//     topic: "Writing - Formal and Informal Letters",
//     score: "16%",
//     status: "Ongoing",
//   },
//   {
//     sn: "004",
//     topic: "Literature - Figures of Speech",
//     score: "20%",
//     status: "Ongoing",
//   },
// ];

const tabs = [
  {
    name: "English",
    value: "English",
    content: englishTopics,
  },
  {
    name: "Mathematics",
    value: "Mathematics",
    content: null,
  },
];

const ActivitiesTable = () => {
  return (
    <div>
      <Tabs defaultValue={tabs[0].value} className=" w-full">
        <TabsList className="w-full p-0 bg-background justify-start border-b rounded-none">
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="rounded-none bg-background h-full data-[state=active]:shadow-none border-2 border-transparent border-b-primary data-[state=active]:border-primary data-[state=active]:border-b-background -mb-[2px] rounded-t max-w-sm"
            >
              <code className="text-[13px]">{tab.name}</code>
            </TabsTrigger>
          ))}
        </TabsList>

        <BentoBox>
          <h2 className="mb-4 font-semibold leading-5 z-20">
            Recommended topics
          </h2>

          {tabs.map((tab) => (
            <TabsContent key={tab.value} value={tab.value}>
              <Table className="table-fixed min-w-120">
                <TableHeader>
                  <TableRow>
                    <TableHead>S/N</TableHead>
                    <TableHead className="w-2/5">Topic</TableHead>
                    <TableHead>Score</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tab.content ? (
                    tab.content.map((topic) => (
                      <TableRow key={topic.sn}>
                        <TableCell className="font-medium">
                          {topic.sn}
                        </TableCell>
                        <TableCell className="w-2/5 truncate">
                          {topic.topic}
                        </TableCell>
                        <TableCell>{topic.score}</TableCell>
                        <TableCell>{topic.status}</TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell className="w-full" colSpan={4}>
                        <div className="w-full flex items-center flex-col gap-4 pb-8 pt-6">
                          <p className="text-gray-6 text-sm font-medium leading-5">
                            No Assessment taken yet
                          </p>
                          <img src={noData} alt="No Assessments" />
                        </div>
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TabsContent>
          ))}
        </BentoBox>
      </Tabs>
    </div>
  );
};

export default ActivitiesTable;
