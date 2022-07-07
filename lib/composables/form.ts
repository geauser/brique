import useVuelidate, { ValidationArgs, ExtractState } from "@vuelidate/core";
import { reactive, ref } from "vue";


/**
 * TODO
 * @param data Form data
 * @param rules Vuelidate rules
 * @returns 
 */
function useForm<T extends Record<string, unknown>, V extends ValidationArgs>(
  data: T,
  rules: V,
) {

  const form = reactive<T>(data);
  const loading = ref(false);
  const v = useVuelidate(rules, form as ExtractState<V>);

  function submitGuard(...args: any[]) {
    return args.reduce((a, b) => a && b) && !loading.value && !v.value.$invalid;
  }

  return {
    form,
    loading,
    submitGuard,
    v,
  };
}


export default useForm;