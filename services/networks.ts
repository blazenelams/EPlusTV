export const useEspn1 = process.env.ESPN;
export const useEspn2 = process.env.ESPN2;
export const useEspn3 = process.env.ESPN3;
export const useEspnU = process.env.ESPNU;
export const useSec = process.env.SEC;
export const useSecPlus = process.env.SECPLUS;
export const useAccN = process.env.ACCN;
export const useAccNx = process.env.ACCNX;
export const useLonghorn = process.env.LONGHORN;
export const useEspnPlus = process.env.ESPNPLUS?.toLowerCase() === 'false' ? false : true;

export const useFoxSports = process.env.FOXSPORTS;

export const useNbcSports = process.env.NBCSPORTS;

export const useMLBtv = process.env.MLBTV;

export const requiresEspnProvider =
  useEspn1 || useEspn2 || useEspn3 || useEspnU || useSec || useSecPlus || useAccN || useLonghorn || useAccNx;

export const usesMultiple =
  ((useFoxSports || useMLBtv) && (requiresEspnProvider || useEspnPlus)) || (requiresEspnProvider && useEspnPlus);

export const useLinear = process.env.USE_LINEAR && (requiresEspnProvider || useFoxSports);

export const digitalNetworks = ['ESPN+', 'ESPN3', 'SEC Network +', 'ACCNX', 'FS1-DIGITAL'];
