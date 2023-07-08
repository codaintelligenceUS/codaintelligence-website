/**
 * Helper hooks for hubspot
 */

import axios, { isAxiosError } from "axios";
import { useState } from "react";

type FormDataType = { [key: string]: string };

export function useHubspotSubmit(params: { portalId: string; formId: string }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const url = `https://api.hsforms.com/submissions/v3/integration/submit/${params.portalId}/${params.formId}`;

  const handleSubmit = async (data: FormDataType) => {
    setIsError(false);
    setIsLoading(false);

    const fields: { name: string; value: string }[] = [];
    Object.keys(data).forEach((key) => {
      fields.push({
        name: key,
        value: data[key],
      });
    });

    try {
      await axios.post(url, { fields });
    } catch (e) {
      if (isAxiosError(e)) {
        setIsError(true);
        setIsLoading(false);
      }
    }

    setIsError(true);
    setIsLoading(true);
  };

  return { isLoading, isError, handleSubmit };
}
