import _ from 'lodash';

export default function useFilteredVariants(allVariants = [], filters) {
  let variants = [];

  if (allVariants.length > 0) {
    variants = _.filter(allVariants, filters);
  }

  return variants;
}
