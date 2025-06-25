
import com.salesmanager.core.business.services.reference.language.LanguageService;
import com.salesmanager.core.model.customer.attribute.CustomerOption;
import com.salesmanager.core.model.merchant.MerchantStore;
import com.salesmanager.shop.admin.controller.ControllerConstants;
import com.salesmanager.shop.constants.Constants;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import javax.inject.Inject;
import javax.servlet.http.HttpServletResponse;
import java.util.*;
@Controller
	
	private LanguageService languageService;
	@Inject
	
	private LabelUtils messages;
	private static final Logger LOGGER = LoggerFactory.getLogger(CustomerOptionsController.class);
	
	@RequestMapping(value="/admin/customers/options/list.html", method=RequestMethod.GET)
		
		return ControllerConstants.Tiles.Customer.optionsList;

	
	@RequestMapping(value="/admin/customers/options/edit.html", method=RequestMethod.GET)
		return displayOption(id,request,response,model,locale);
	
	@RequestMapping(value="/admin/customers/options/create.html", method=RequestMethod.GET)
		return displayOption(null,request,response,model,locale);
	

		this.setMenu(model, request);
		

		
		
			
			option = customerOptionService.getById(optionId);
			
				return "redirect:/admin/customers/options/list.html";
			
				return "redirect:/admin/customers/options/list.html";
			
			
			
			
				
					
						
						if(code.equals(l.getCode())) {
						}
					
				
					optionDescription = new CustomerOptionDescription();
				}
			}
		} else {
				CustomerOptionDescription desc = new CustomerOptionDescription();
				descriptions.add(desc);
		}

		model.addAttribute("option", option);
		
	}
	
	@RequestMapping(value="/admin/customers/options/save.html", method=RequestMethod.POST)
		
		//display menu
		
		CustomerOption dbEntity =	null;	
		if(option.getId() != null && option.getId() >0) { //edit entry
			//get from DB
			
				return "redirect:/admin/options/options.html";
		}
		//validate if it contains an existing code
		if(byCode!=null && option.getId()==null) {
			result.addError(error);

		Map<String,Language> langs = languageService.getLanguagesMap();

		
				
					
						ObjectError error = new ObjectError("name",messages.getMessage("message.name.required", locale));
					} else {
						String code = description.getLanguage().getCode();
						description.setLanguage(l);
					
	
				
			
		option.setMerchantStore(store);
		
			return ControllerConstants.Tiles.Customer.optionDetails;
		
		
		customerOptionService.saveOrUpdate(option);


		return ControllerConstants.Tiles.Customer.optionDetails;

	
	@PreAuthorize("hasRole('CUSTOMER')")
	public @ResponseBody ResponseEntity<String> pageOptions(HttpServletRequest request, HttpServletResponse response) {
		AjaxResponse resp = new AjaxResponse();
		
			
			Language language = (Language)request.getAttribute("LANGUAGE");	
			MerchantStore store = (MerchantStore)request.getAttribute(Constants.ADMIN_STORE);
			List<CustomerOption> options = null;

			options = customerOptionService.listByStore(store, language);

					
			for(CustomerOption option : options) {
				@SuppressWarnings("rawtypes")
				entry.put("id", option.getId());
				CustomerOptionDescription description = option.getDescriptions().iterator().next();
				entry.put("name", description.getName());
				entry.put("active", option.isActive());
				resp.addDataEntry(entry);
				
			
			
		
			LOGGER.error("Error while paging options", e);
		}
		String returnString = resp.toJSONString();
	    httpHeaders.setContentType(MediaType.APPLICATION_JSON_UTF8);
		
	}
	
	
		
		Map<String,String> activeMenus = new HashMap<String,String>();
		activeMenus.put("customer-options", "customer-options");
		@SuppressWarnings("unchecked")
		
		model.addAttribute("currentMenu",currentMenu);
		//
	}
	@PreAuthorize("hasRole('CUSTOMER')")
	public @ResponseBody ResponseEntity<String> deleteOption(HttpServletRequest request, HttpServletResponse response, Locale locale) {

		

		try {
			Long id = Long.parseLong(sid);
			CustomerOption entity = customerOptionService.getById(id);
			if(entity==null || entity.getMerchantStore().getId().intValue()!=store.getId().intValue()) {
				resp.setStatusMessage(messages.getMessage("message.unauthorized", locale));
				
				
				resp.setStatus(AjaxResponse.RESPONSE_OPERATION_COMPLETED);
			}
		
			LOGGER.error("Error while deleting option", e);
			resp.setErrorMessage(e);
		
		final HttpHeaders httpHeaders= new HttpHeaders();
		return new ResponseEntity<String>(returnString,httpHeaders,HttpStatus.OK);
