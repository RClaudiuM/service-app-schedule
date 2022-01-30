import React, { useEffect, useState } from "react";
import { Autocomplete, Button, TextField } from "@mui/material";
import "./Request.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { MobileDateTimePicker } from "@mui/lab";
import { ro } from "date-fns/locale";

const key = "Your_Database_Api_Key";

const Request = () => {
  const [date, setDate] = useState(new Date());
  const [make, setMake] = useState([]);
  const [models, setModels] = useState([]);
  const [makeInputValue, setMakeInputValue] = useState("");
  const [makeId, setMakeId] = useState(null);
  const [isModelDisabled, setIsModelDisabled] = useState(true);

  useEffect(() => {
    const getMake = async (apiKey) => {
      //Your_Database_Api_Key
      const response = await fetch(
        `https://databases.one/api/?format=json&select=make&api_key=${apiKey}`
      );
      const result = await response.json();
      const data = result.result;
      const newData = [];
      data.forEach((item) => {
        newData.push({
          label: `${item.make}`,
          id: item.make_id,
        });
      });
      setMake(newData);
    };

    getMake(key);
  }, []);

  useEffect(() => {
    const getModels = async (apiKey) => {
      const response = await fetch(
        `https://databases.one/api/?format=json&select=model&make_id=${makeId}&api_key=${apiKey}`
      );
      const result = await response.json();
      const data = result.result;
      const newData = [];
      data.forEach((item) => {
        newData.push({
          label: `${item.model}`,
          id: item.model_id,
        });
      });
      setModels(newData);
    };
    getModels(key);
  }, [makeId]);

  return (
    <div className="request-container">
      <div className="request-inner-container">
        <div className="request-header">
          <Button
            startIcon={<ArrowBackIcon />}
            size="large"
            href="/"
            color="inherit"
          >
            Autentificare
          </Button>
        </div>
        <h3 className="request-title">Creare programare nouă</h3>
        <div className="name-container">
          <TextField required id="name-input" label="Nume" fullWidth />
        </div>
        <div className="telephone-container">
          <TextField required id="phone-input" label="Telefon" fullWidth />
        </div>
        <div className="select-make-container">
          <Autocomplete
            fullWidth={true}
            inputValue={makeInputValue}
            onInputChange={(e, newInputValue) => {
              setMakeInputValue(newInputValue);
              setMakeId(make.find((x) => x.label === `${newInputValue}`)?.id);
            }}
            disablePortal
            id="select-make"
            options={make}
            renderInput={(params) => <TextField {...params} label="Marca" />}
          />
        </div>
        <div className="select-model-container">
          <Autocomplete
            disablePortal
            disabled={makeId ? false : true}
            id="select-model"
            options={models}
            renderInput={(params) => <TextField {...params} label="Model" />}
          />
        </div>
        <div className="description-container">
          <TextField
            fullWidth
            required
            id="description-input"
            label="Descriere programare"
            multiline
            rows={5}
          />
        </div>
        <div className="date-time-container">
          <div className="date-container">
            <LocalizationProvider dateAdapter={AdapterDateFns} locale={ro}>
              <MobileDateTimePicker
                label="Data și ora"
                value={date}
                // mask="__/__/____"
                onChange={(newVal) => setDate(newVal)}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </div>
        </div>
        <div className="button-container">
          <Button
            size="large"
            variant="outlined"
            color="primary"
            id="send-request"
          >
            Trimitere
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Request;
