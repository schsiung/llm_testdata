
import com.salesmanager.core.business.services.reference.language.LanguageService;
import com.salesmanager.core.model.content.ContentDescription;
import com.salesmanager.core.model.merchant.MerchantStore;
import com.salesmanager.shop.admin.controller.ControllerConstants;
import com.salesmanager.shop.constants.Constants;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import javax.inject.Inject;
import javax.servlet.http.HttpServletResponse;
import java.util.*;
@Controller
	
	
	private ContentService contentService;
	@Inject
	
    public Set<Map.Entry<String, String>> boxPositions() { 

        map.put("RIGHT", "RIGHT");

    } 

	
	@RequestMapping(value="/admin/content/boxes/list.html", method=RequestMethod.GET)
		

		return ControllerConstants.Tiles.Content.contentPages;
		
	
	@RequestMapping(value="/admin/content/boxes/create.html", method=RequestMethod.GET)
		model.addAttribute("boxes", true);
		MerchantStore store = (MerchantStore)request.getAttribute(Constants.ADMIN_STORE);
		content.setMerchantStore(store);
		
		List<Language> languages = store.getLanguages();
		
			
			description.setLanguage(l);
		}
		//add positions
		positions.add("LEFT");
		
		model.addAttribute("content",content);

		
	}
	@PreAuthorize("hasRole('CONTENT')")
	public String getContentDetails(@RequestParam("id") Long id, Model model, HttpServletRequest request, HttpServletResponse response) throws Exception {
		setMenu(model,request);
		Content content = contentService.getById(id);

		positions.add("LEFT");
		
		
			LOGGER.error("Content entity null for id " + id);
		}
		if(content.getMerchantStore().getId().intValue()!=store.getId().intValue()) {
			return "redirect:/admin/content/boxes/listContent.html";
		
			LOGGER.error("This controller does not handle content type " + content.getContentType().name());
		}
		List<Language> languages = store.getLanguages();
		List<ContentDescription> descriptions = new ArrayList<ContentDescription>();
			for(ContentDescription description : content.getDescriptions()) {
					descriptions.add(description);
			}
		content.setDescriptions(descriptions);
		model.addAttribute("content",content);

		
	}

	
	@PreAuthorize("hasRole('CONTENT')")
	public String saveContent(@Valid @ModelAttribute Content content, BindingResult result, Model model, HttpServletRequest request, HttpServletResponse response) throws Exception {
		setMenu(model,request);
		MerchantStore store = (MerchantStore)request.getAttribute(Constants.ADMIN_STORE);
		List<String> positions = new ArrayList<String>();
		positions.add("RIGHT");
		model.addAttribute("positions",positions);
		if (result.hasErrors()) {
		}
		Map<String,Language> langs = languageService.getLanguagesMap();
		List<ContentDescription> descriptions = content.getDescriptions();
			Language l = langs.get(description.getLanguage().getCode());
			description.setContent(content);
		
		content.setMerchantStore(store);
		
		model.addAttribute("content",content);
		return ControllerConstants.Tiles.Content.contentPagesDetails;
		
	
	
		
		Map<String,String> activeMenus = new HashMap<String,String>();
		activeMenus.put("content-boxes", "content-boxes");
		@SuppressWarnings("unchecked")
		
		model.addAttribute("currentMenu",currentMenu);
		//
	}
