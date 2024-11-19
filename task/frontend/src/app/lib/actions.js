export const getInflationRate = async () => {
  try {
    const res = await fetch("http://localhost:8000/api/inflation");
    const data = await res.json();
    return data.data.slice(1);
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getUnemploymentRate = async () => {
  try {
    const res = await fetch("http://localhost:8000/api/unemployment");
    const data = await res.json();
    return data.data.slice(1);
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getPmiData = async () => {
  try {
    const res = await fetch("http://localhost:8000/api/pmi");
    const data = await res.json();
    return data.data.slice(1);
  } catch (error) {
    console.error(error);
    return null;
  }
};
