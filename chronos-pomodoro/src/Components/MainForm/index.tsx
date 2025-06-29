// import styles from "./styles.module.css";

import { PlayCircleIcon } from "lucide-react";
import { Button } from "../Button";
import { Cycles } from "../Cycles";
import { Input } from "../Input";

export const MainForm = () => {
  return (
    <>
      <form className="form">
        <div className="formRow">
          <Input
            id="teste"
            placeholder="Digite algo"
            labelText="task"
            type="text"
          />
        </div>

        <div className="formRow">
          <p>Lorem ipsum dolor sit amet.</p>
        </div>

        <div className="formRow">
          <Cycles />
        </div>

        <div className="formRow">
          <Button
            icon={
              <>
                <PlayCircleIcon />
              </>
            }
          />
        </div>
      </form>
    </>
  );
};
