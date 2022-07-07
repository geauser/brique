import useVuelidate, { ValidationArgs } from "@vuelidate/core";
import { reactive, ref } from "vue";


/**
 * TODO
 * @param form Form data
 * @param rules Vuelidate rules
 * @returns 
 */
function useForm<Form extends {[key in keyof Rules]: any}, Rules extends ValidationArgs>(form: Form, rules: Rules) {

  const state = reactive<Form>(form);
  const loading = ref(false);
  const v = useVuelidate<Rules>(rules, state);

  function submitGuard(...args: any[]) {
    return args.reduce((a, b) => a && b) && !loading.value && !v.value.$invalid;
  }

  return {
    form: state,
    loading,
    submitGuard,
    v,
  };

}

export default useForm;